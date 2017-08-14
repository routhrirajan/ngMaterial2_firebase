import { Component, OnInit, ViewChildren, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from './interfaces';
import { SigninService } from './services/signin.service'
import { Router } from '@angular/router'
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  @ViewChildren('email') emailCtrl;
  constructor(
    private fb: FormBuilder,
    private _signinService: SigninService,
    private _router: Router
  ) { 
    if (localStorage.getItem("uid")) {
      this._router.navigate(['/home']);      
    }
  }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      password: ['', Validators.required]
    })
    
  }
  ngAfterViewInit() {
    //this.emailCtrl.first.nativeElement.focus();
  }
  onSubmit({ value, valid }: { value: IUser, valid: boolean }) {
    if(valid)
      this._signinService.login(value);
  }

}
