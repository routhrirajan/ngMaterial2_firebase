import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationGuard } from './../shared';
import { CategoriesComponent } from './index';

@NgModule({
  imports: [RouterModule.forChild([
    {
        path: 'categories',
        component: CategoriesComponent,   
        canActivate: [AuthenticationGuard]     
    }
  ]),
],
  exports: [RouterModule],
})
export class CategoriesRoutingModule { }
