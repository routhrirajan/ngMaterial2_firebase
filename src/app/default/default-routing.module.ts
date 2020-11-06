import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from '../default/default.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'default',
        component: DefaultComponent,
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class DefaultRoutingModule { }
