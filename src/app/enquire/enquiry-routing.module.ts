import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationGuard } from './../shared/authentication/authentication.guard';
import { EnquireListComponent } from './index';
import { EnquireResolver } from 'app/enquire/services/enquire-list.resolver';

@NgModule({
  imports: [RouterModule.forChild([
    {
        path: 'enquiries',
        component: EnquireListComponent,
        canActivate: [AuthenticationGuard],
        resolve: {
          enquiries: EnquireResolver,
        },
    }
  ]),
],
providers: [EnquireResolver],
  exports: [RouterModule],
})
export class EnquiryRoutingModule { }
