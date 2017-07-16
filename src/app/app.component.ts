import { Component, ViewChild, Directive } from '@angular/core';
import { SidebarComponent } from "app/layout/sidebar";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isDarkTheme: boolean = true;
  @ViewChild(SidebarComponent) sidebar: SidebarComponent;
  onThemeChange(status:boolean){   
    this.isDarkTheme = status;
  }
  toggleSidebar() {    
    this.sidebar.sidenav.open();
  } 
  closeSidebar(){
    this.sidebar.sidenav.close();
  }
}
