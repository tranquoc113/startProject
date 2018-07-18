import { PromotionRoutingModule } from './promotion-routing.module';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PromotionDetailComponent } from './promotion-detail/promotion-detail.component';
import { PromotionService } from './promotion.service';
import {RouterModule} from '@angular/router';
import { TabsModule, BsDatepickerModule, TimepickerModule} from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TabsModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        PromotionRoutingModule,
        RouterModule,
    ],
    declarations: [
        PromotionListComponent,
        PromotionDetailComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        PromotionService
    ],
    exports: [],
})
export class PromotionModule {
}
