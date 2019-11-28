import { Component, OnInit } from '@angular/core';
import { TideAppService } from '../services/tide-app.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  userProfile = 'User';
  isUserLoggedIn: boolean = false;

  constructor(
    private appService: TideAppService
  ) {

    this.appService.fetchUserProfile().subscribe(
      (userProfile) => {
        if (userProfile != null && userProfile.username != null && userProfile.username.length > 0) {
          this.userProfile = userProfile.username;
          this.isUserLoggedIn = true;
        }

      }
    );

  }


  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
