import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  buffer: {
    navigation: Observable<any>,
    auth: EventEmitter<any>,
  };

  constructor (
    private router: Router,
  ) {
    this.buffer = {
      navigation: this.router.events,
      auth: new EventEmitter(),
    };
  }

}
