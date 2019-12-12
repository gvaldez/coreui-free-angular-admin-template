import { Component } from '@angular/core';

import { AuthService } from '@service/auth';
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
    private auth: AuthService,
    private router: Router,
  ) {
    if ( this.auth.isAuthorized() ) {
      this.router.navigate(['/pocs']);
    }
  }

  login() {
    this.response = this.auth.login(this.user, this.pass);
    if (this.response) {
      if (this.response.status === 200) {
        this.router.navigate(['/pocs']);
      }
    }
  }



}
