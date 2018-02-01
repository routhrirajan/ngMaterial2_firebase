import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationGuard } from './../shared/authentication/authentication.guard';
import { CategoriesComponent } from './categories.component';

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
