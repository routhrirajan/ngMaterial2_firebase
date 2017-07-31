import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationGuard } from './../shared';
import { UsersComponent } from './index';

@NgModule({
  imports: [RouterModule.forChild([
    {
        path: 'users',
        component: UsersComponent,   
        canActivate: [AuthenticationGuard]     
    }
  ]),
],
  exports: [RouterModule],
})
export class UsersRoutingModule { }