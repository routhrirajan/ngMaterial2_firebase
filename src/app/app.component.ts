import { Component, ViewChild, Directive } from '@angular/core';
import { AnimationsService } from './shared/animations/index';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public activateAnimation = false;

  /**
   * Constructor of the class
   *
   * @param {AnimationsService} animationService
   */
  public constructor(
    private animationService: AnimationsService
  ) 
  {
    this.animationService.activateAnimation$.subscribe(
      (value) => this.activateAnimation = value
    );
  }
  isDarkTheme: boolean = false;  
  onThemeChange(status: boolean) {
    this.isDarkTheme = status;
  }
  toggleSidebar(status: boolean) {
    if (status) {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
    else {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }
  }  
}
