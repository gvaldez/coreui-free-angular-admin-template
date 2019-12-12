import {Component } from '@angular/core';
import { navItems } from './_nav.custom';

import { AuthService } from '@service/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './custom-layout.component.html'
})
export class CustomLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(
    private auth: AuthService,
  ) {}

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this.auth.logout();
  }
}
