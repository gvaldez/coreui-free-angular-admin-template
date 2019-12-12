import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { TimerComponent } from './timer';
import { WebsocketComponent } from './websocket';
import { PocsRoutingModule } from './pocs.routing';


import { SharedModule } from '@module/shared.module';

@NgModule({
  imports: [
    FormsModule,
    PocsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    SharedModule
  ],
  declarations: [
    TimerComponent,
    WebsocketComponent,
  ]
})
export class PocsModule { }
