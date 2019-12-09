import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardDemoComponent } from './dashboard-demo.component';
import { DashboardDemoRoutingModule } from './dashboard-demo-routing.module';

@NgModule({
  imports: [
    FormsModule,
    DashboardDemoRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DashboardDemoComponent ]
})
export class DashboardDemoModule { }
