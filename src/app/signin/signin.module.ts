import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SigninComponent } from './index';
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
})

export class SigninModule { }
