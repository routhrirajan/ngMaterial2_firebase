import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
@Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
@Input() isDarkTheme:boolean;
toggleSidebarStatus: boolean = false;

  constructor() {    
   }
  ngOnInit() {
  }
  onThemeChange(){  
    this.isDarkTheme = !this.isDarkTheme; 
    this.notify.emit(this.isDarkTheme);
  }  
  onOpenSidebar(){
    this.toggleSidebarStatus = !this.toggleSidebarStatus;
    this.toggleSidebar.emit(this.toggleSidebarStatus);
  }
  
}
