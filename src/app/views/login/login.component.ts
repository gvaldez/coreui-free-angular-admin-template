import { Component } from '@angular/core';

import { IoService } from '../../services/io/io.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  user: string;
  pass: string;

  response: any;

  constructor(
    private io: IoService,
    private router: Router,
  ) {
    const response = this.io.api({
      url: 'http://localhost:3000',
      method: 'GET',
    });

    console.log(response);
  }

  login() {
    if (this.user && this.pass) {

      this.response = this.io.api({
        url: 'http://localhost:3000/authenticate',
        method: 'POST',
        body: {
          user: this.user,
          pass: this.pass,
        }
      });

      console.log(this.response);

      localStorage.setItem('acces_token', this.response.body.token);
      this.router.navigate(['/']);


    } else {
      this.response = 'invalid parameters';
      console.log('invalid parameters');
    }
  }
}
