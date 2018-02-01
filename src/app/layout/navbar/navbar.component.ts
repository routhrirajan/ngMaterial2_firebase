import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
@Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
@Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
@Input() isDarkTheme: boolean;
toggleSidebarStatus = false;
isLoggedIn = false;
  constructor(
    private afAuth: AngularFireAuth,
  ) {
   }
  onThemeChange() {
    this.isDarkTheme = !this.isDarkTheme;
    this.notify.emit(this.isDarkTheme);
  }
  onOpenSidebar() {
    this.toggleSidebarStatus = !this.toggleSidebarStatus;
    this.toggleSidebar.emit(this.toggleSidebarStatus);
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
