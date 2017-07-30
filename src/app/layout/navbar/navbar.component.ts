import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { SigninService } from '../../signin/services/';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[ SigninService ]
})
export class NavbarComponent {
@Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
@Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
@Input() isDarkTheme:boolean;
toggleSidebarStatus: boolean = false;
isLoggedIn: boolean = false;
  constructor(
    private _angularFire: AngularFireAuth,
    private _signinService: SigninService
  ) {    
   }  
  onThemeChange(){  
    this.isDarkTheme = !this.isDarkTheme; 
    this.notify.emit(this.isDarkTheme);
  }  
  onOpenSidebar(){
    this.toggleSidebarStatus = !this.toggleSidebarStatus;
    this.toggleSidebar.emit(this.toggleSidebarStatus);
  }
  logout(){
    this._signinService.logout(); 
    
    //this._angularFire.auth.signOut();    
  }
  
}
