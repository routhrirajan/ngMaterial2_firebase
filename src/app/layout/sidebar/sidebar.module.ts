import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { SidebarComponent } from './index';
import { SidebarRoutingModule } from './sidebar-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SidebarRoutingModule
  ],
  exports:[
    SidebarComponent
  ],
  declarations: [
    SidebarComponent
  ]
})
export class SidebarModule { }
