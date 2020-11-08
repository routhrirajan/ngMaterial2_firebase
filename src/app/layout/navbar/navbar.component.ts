import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EnquireComponent, EnquiryService } from 'app/enquire';
import { LoginComponent } from 'app/login';
import { AuthenticationService } from 'app/shared';

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
    public afAuth: AngularFireAuth,
    private router: Router,
    private enquireDialog: MatDialog,
    private loginDialog: MatDialog,
    private snackbar: MatSnackBar,
    private auth: AuthenticationService,
    private _router: Router,
    private _enquiryService: EnquiryService
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
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/default']);
    });
  }

  openEnquireDialog() {
    this.enquireDialog.open(EnquireComponent).afterClosed()
    .filter(result => !!result)
    .subscribe(enquireUser => {
      this._enquiryService.addEnquiry(enquireUser.value);
      this.snackbar.open(
       'Your registration is success. Your activation will be done and you will receive the login information shortly.',
       'OK',
      {
        duration: 6000
      });
    });
  }

  openLoginDialog() {
    debugger;
    this.loginDialog.open(LoginComponent).afterClosed()
    .filter(result => !!result)
    .subscribe(loginUser => {
      this.auth.emailLogin(loginUser.value['email'], loginUser.value['password'])
      .then(() => this._router.navigate(['/home']));
    });
  }
}
