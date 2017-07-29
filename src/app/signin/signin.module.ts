import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SigninComponent, SigninService } from './index';
import { SigninRoutingModule } from './signin-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SigninRoutingModule,
  ],
  declarations: [
    SigninComponent,
  ],
  exports: [
    SigninComponent,
  ],
  providers:[
    SigninService
  ]
})

export class SigninModule { }
