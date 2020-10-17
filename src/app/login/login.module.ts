import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {LoginComponent } from './index';
import { LoginRoutingModule } from './login-routing.module';
import { AuthenticationService } from '../shared/authentication/authentication.service';
import { EnquireModule } from 'app/enquire/enquire.module';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule,
    EnquireModule
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent,
  ],
  providers: [
    AuthenticationService
  ]
})

export class LoginModule { }
