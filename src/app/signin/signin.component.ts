import { Component, OnInit, ViewChildren, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from './interfaces';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
signInForm : FormGroup;
@ViewChildren('email') emailCtrl;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      email: ['',[Validators.required, Validators.pattern(EMAIL_REGEX)]],
      password: ['',Validators.required]      
    })
  }
  ngAfterViewInit(){
    this.emailCtrl.first.nativeElement.focus();
  }
  onSubmit({ value, valid }: { value: IUser, valid: boolean }) {
    console.log(value, valid);
  }

}
