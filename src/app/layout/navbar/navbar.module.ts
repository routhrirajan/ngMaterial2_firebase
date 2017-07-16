import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { NavbarComponent } from './index';
import { NavbarRoutingModule } from './navbar-routing.module';

@NgModule({
  imports: [
    SharedModule,
    NavbarRoutingModule   
  ],
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
  ],
})

export class NavbarModule { }
