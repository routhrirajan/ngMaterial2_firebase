import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'
import {Component, Directive, NgZone, Renderer, ElementRef, ViewChild} from '@angular/core'
import { AnimationsService } from './shared/animations/index';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public activateAnimation = false;
  isDarkTheme = false;

  // Instead of holding a boolean value for whether the spinner
  // should show or not, we store a reference to the spinner element,
  // see template snippet below this script
  @ViewChild('spinnerElement')
  spinnerElement: ElementRef
  /**
   * Constructor of the class
   *
   * @param {AnimationsService} animationService
   */
  public constructor(private router: Router,
    private ngZone: NgZone,
    private renderer: Renderer,
    private animationService: AnimationsService
  ) {
    this.animationService.activateAnimation$.subscribe(
      (value) => this.activateAnimation = value
    );
    router.events.subscribe((event: RouterEvent) => {
      this._navigationInterceptor(event)
    })
  }
  // Shows and hides the loading spinner during RouterEvent changes
  private _navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      // We wanna run this function outside of Angular's zone to
      // bypass change detection
      this.ngZone.runOutsideAngular(() => {
        // For simplicity we are going to turn opacity on / off
        // you could add/remove a class for more advanced styling
        // and enter/leave animation of the spinner
        this.renderer.setElementStyle(
          this.spinnerElement.nativeElement,
          'display',
          'flex'
        )
      })
    }
    if (event instanceof NavigationEnd) {
      this._hideSpinner()
    }
    // Set loading state to false in both of the below events to
    // hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this._hideSpinner()
    }
    if (event instanceof NavigationError) {
      this._hideSpinner()
    }
  }
  private _hideSpinner(): void {
    // We wanna run this function outside of Angular's zone to
    // bypass change detection,
    this.ngZone.runOutsideAngular(() => {
      // For simplicity we are going to turn opacity on / off
      // you could add/remove a class for more advanced styling
      // and enter/leave animation of the spinner
      this.renderer.setElementStyle(
        this.spinnerElement.nativeElement,
        'display',
        'none'
      )
    })
  }
  onThemeChange(status: boolean) {
    this.isDarkTheme = status;
  }
  toggleSidebar(status: boolean) {
    if (status) {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
    } else {
      document.getElementById('mySidenav').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
    }
  }
}
