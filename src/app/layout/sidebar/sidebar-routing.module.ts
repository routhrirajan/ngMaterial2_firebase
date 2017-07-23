import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './index' 

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SidebarComponent,
        outlet: 'sidebar',
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class SidebarRoutingModule { }
