import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../shared/';
import { SigninComponent } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'signin',
        component: SigninComponent,        
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class SigninRoutingModule { }