import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {LoginComponent } from './index';
import { LoginRoutingModule } from './login-routing.module';
import { AuthenticationService } from '../shared/authentication/authentication.service';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent,
  ],
  entryComponents:[
    LoginComponent
  ],
  providers: [
    AuthenticationService
  ]
})

export class LoginModule { }
