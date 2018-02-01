import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationGuard } from './../shared/authentication/authentication.guard';
import { LinksComponent } from './index';
import { LinksResolver } from 'app/home';

@NgModule({
  imports: [RouterModule.forChild([
    {
        path: 'links',
        component: LinksComponent,
        canActivate: [AuthenticationGuard],
        resolve: {
          links: LinksResolver,
        },
    }
  ]),
],
  exports: [RouterModule],
})
export class LinksRoutingModule { }
