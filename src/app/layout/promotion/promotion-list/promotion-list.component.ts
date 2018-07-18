import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion';
import { PromotionService } from '../promotion.service';

@Component({
    selector: 'app-promotion-list',
    templateUrl: './promotion-list.component.html',
    styleUrls: ['./promotion-list.component.scss']
})
export class PromotionListComponent implements OnInit {
    data: Array<Promotion> = [];

    constructor(private promotionService: PromotionService) {}

    ngOnInit() {
        this.data = this.promotionService.getLists();
    }
    deleteItem(uuid: string ) {
        this.data =    this.promotionService.remove(uuid);
        
    }
}
