import { NgModule } from '@angular/core';

import { FooterModule } from './footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';
import { SidebarModule} from './sidebar/sidebar.module';

@NgModule({
  imports: [
    FooterModule,
    NavbarModule,
  ],
  exports: [
    FooterModule,
    NavbarModule,
    SidebarModule
  ]  
})

export class LayoutModule { }
