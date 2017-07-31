import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationGuard } from './../shared';
import { LinksComponent } from './index';

@NgModule({
  imports: [RouterModule.forChild([
    {
        path: 'links',
        component: LinksComponent,   
        canActivate: [AuthenticationGuard]     
    }
  ]),
],
  exports: [RouterModule],
})
export class LinksRoutingModule { }
