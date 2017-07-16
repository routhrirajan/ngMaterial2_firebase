import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: NavbarComponent,
        outlet: 'navbar',
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class NavbarRoutingModule { }
