import { Injectable } from '@angular/core';

import { IoService } from '@service/io';
import { EventService } from '@service/util/event';
import { environment as env } from '@env/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private io: IoService,
    private events: EventService,
    private router: Router,
  ) {
    this.events.buffer.auth.subscribe(ev => this.onAuthChange(ev) );
  }

  onAuthChange (ev: any) {
    switch (ev.type) {
      case 'login':
        break;
      case 'logout':
        this.router.navigate(['login']);
        break;
    }
  }

  login (user: string, password: string) {
    let result: any;

    if (user && password) {

      const response = this.io.api({
        url: `${env.auth.host}/api/auth/authenticate`,
        method: 'POST',
        body: {
          user: user,
          pass: password,
        }
      });

      result = { status: response.status, msg: 'Access granted.' };
      this.events.buffer.auth.emit({type: 'login', body: result});

      console.log(result);

      localStorage.setItem('acces_token', response.body.token);

    } else {
      result = { status: 500, msg: 'Invalid parameters.' };
    }

    return result;
  }

  isAuthorized () {
    let result = false;
    const token = localStorage.getItem('acces_token');
    if (token) {

      const response = this.io.api({
        url: `${env.auth.host}/api/auth/authorize`,
        method: 'GET',
        headers: {  Authorization: `Bearer ${token}` }
      });

      console.log(token);
      console.log(response);

      if (response.status === 200) {
        if ( response.body.mensaje === 'Authorized') {
          result = true;
        }
      }

    }
    return result;
  }

  logout() {
    localStorage.setItem('acces_token', undefined);
    this.events.buffer.auth.emit({type: 'logout'});
  }

}
