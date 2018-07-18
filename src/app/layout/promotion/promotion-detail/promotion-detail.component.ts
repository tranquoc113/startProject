import { PromotionService } from './../promotion.service';
import { Promotion } from './../promotion';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {moment} from 'ngx-bootstrap/chronos/test/chain';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {TabsetComponent} from 'ngx-bootstrap';
@Component({
    selector: 'app-promotion-detail',
    templateUrl: './promotion-detail.component.html',
    styleUrls: ['./promotion-detail.component.scss']
})
export class PromotionDetailComponent implements OnInit {
    toDate: Date = new Date();
    fromDate: Date = new Date();
    fromHours: Date = new Date();
    toHours: Date = new Date();
    statusFromHour = false;
    statusToHour = false;
    countCommodities = 0;
    countCommoditiesPromotion = 0;
    promotion: Promotion = new Promotion();
    bsDatePickerConfig: any = {dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-dark-blue'};
    private changeDateTimer: number = null;
    @ViewChild('txtName') txtName: ElementRef;

    constructor(private location: Location,
        private route: ActivatedRoute,
    private promotionService: PromotionService) {
        this.route.paramMap.subscribe(params => {
            this.promotion.uuid = params.get('id');
        }
    );
    }

    ngOnInit () {
        if ( this.promotion.uuid ) {
            this.promotion = this.promotionService.getById(this.promotion.uuid);
        } else {
            this.fromHours.setHours(0, 0 );
            this.toHours.setHours(0, 0 );
        }
    }
    focusOutFromDate(event?: any) {
        const date = moment(new Date(event));
        if ((!date.isValid() || date.isAfter(moment(this.toDate)))) {
            this.setTimeout(this.changeDateTimer, () => {
                this.fromDate = this.toDate;
            });
        }
    }

    focusOutToDate(event) {
        const date = moment(new Date(event));
        if ((!date.isValid() || date.isBefore(moment(this.fromDate)))) {
            this.setTimeout(this.changeDateTimer, () => {
                this.toDate = this.fromDate;
            });
        }
    }

    private setTimeout(timer?: number, callback?: Function, delay?: number): number {
        if (timer) {
            window.clearTimeout(timer);
        }
        timer = window.setTimeout(() => {
            callback && callback();
        }, delay || 0);
        return timer;
    }
    onSelectDay(day: number): void {
        const position = this.promotion.dayOfWeeks.indexOf(day);
        if (position !== -1) {
            this.promotion.dayOfWeeks.splice(position, 1);
        } else {
            this.promotion.dayOfWeeks.push(day);
        }
    }
    onSave(): void {
        this.promotion.fromDate = this.fromDate.getTime();
        this.promotion.toDate = this.toDate.getTime();
        this.promotion.fromHours = this.fromHours.getTime();
        this.promotion.toHours = this.toHours.getTime();
        if(this.promotionService.save(this.promotion)) {
            this.back();
        }
    }
    back(): void {
        this.location.back();
    }
    focus(): void {
        this.txtName.nativeElement.focus();
    }
    resetForm(): void {
        this.promotion = new Promotion();
        this.focus();
        this.fromHours.setHours(0, 0 );
        this.toHours.setHours(0, 0 );
        this.formDate = new Date();
        this.toDate = new Date();
    }
}
