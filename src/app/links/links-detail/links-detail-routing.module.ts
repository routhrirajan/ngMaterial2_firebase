import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LinksDetailComponent } from "./links-detail.component";
import { AuthenticationGuard } from '../../shared';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'links-detail',
        component: LinksDetailComponent,
        canActivate: [AuthenticationGuard] 
      }
    ])
  ],
  exports : [RouterModule]
})
export class LinksDetailRoutingModule { }
