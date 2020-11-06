import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DefaultRoutingModule, DefaultComponent } from './index';

@NgModule({
  imports: [
    SharedModule,
    DefaultRoutingModule
  ],
  declarations: [
    DefaultComponent,
  ],
  exports: [
    DefaultComponent,
  ]
})

export class DefaultModule { }
