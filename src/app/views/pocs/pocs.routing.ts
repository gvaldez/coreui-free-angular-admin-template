import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerComponent } from './timer';
import { WebsocketComponent } from './websocket';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'timer'
  },
  {
    path: 'timer',
    component: TimerComponent,
    data: {
      title: 'Timer'
    }
  },
  {
    path: 'websocket',
    component: WebsocketComponent,
    data: {
      title: 'Websocket'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocsRoutingModule {}
