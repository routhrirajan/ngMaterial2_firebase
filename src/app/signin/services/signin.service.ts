import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/user.interface';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SigninService {
user: Observable<firebase.User>;
constructor(
  private _angularFire: AngularFireAuth,
  private _router: Router)
  {
    this.user = _angularFire.authState;
  }
login(value:IUser)
  {
     this._angularFire.auth
      .signInWithEmailAndPassword(
        value.email, 
        value.password
      )
      .then(()=> {
        localStorage.setItem('uid', this._angularFire.auth.currentUser.uid);
        this._router.navigate(['/home']);
      })
      .catch(error => {
        alert(error);
      });
  }
    logout(){
  this._angularFire.auth.signOut();  
  localStorage.removeItem('uid') 
  this._router.navigate(['/signin']);
  }
}
