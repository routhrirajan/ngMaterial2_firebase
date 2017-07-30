import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

/**
 * This class implements a guard for routes that require successful authentication.
 */
@Injectable()
export class AuthenticationGuard implements CanActivate {
  /**
   * Constructor of the class
   *
   * @param {AngularFireAuth} angularFire
   * @param {Router}      router
   */   
  constructor(
    private angularFire: AngularFireAuth,
    private router: Router
  ) {}

  /**
   * To protect routes from being accessible without authentication, the `canActivate()` method checks that current
   * user has been authenticated via FireBaseAuth service and current auth state is valid. Only then navigation will
   * pass on the requested route. Otherwise user will be redirected to login page.
   *
   * @returns {Observable<boolean>}
   */
  canActivate(): Observable<boolean> {
    
    return this.angularFire.authState
      .take(1)
      .map((authState) => {
        !!authState ? localStorage.setItem('uid', this.angularFire.auth.currentUser.uid) : localStorage.removeItem('uid');

        return !!authState;
      })
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/signin']);
        }
      })
    ;
  }
}
