import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        CommonModule,
        DemoRoutingModule
    ],
    declarations: [DemoComponent]
})
export class DemoModule {}
