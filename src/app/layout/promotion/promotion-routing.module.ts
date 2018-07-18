import { PromotionDetailComponent } from './promotion-detail/promotion-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionListComponent } from './promotion-list/promotion-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'promotion', pathMatch: 'full' },
    { path: '', component: PromotionListComponent },
    {path: 'detail/:id', component: PromotionDetailComponent},
    {path: 'add', component: PromotionDetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PromotionRoutingModule { }
