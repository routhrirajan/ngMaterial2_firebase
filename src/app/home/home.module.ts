import { NgModule } from '@angular/core';
import { HomeComponent,LinkListComponent,LinksResolver } from './index'
import { HomeRoutingModule } from './home-routing.module'
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [    
    SharedModule,
    HomeRoutingModule,
  ],
  exports: [
    HomeComponent,
    LinkListComponent
  ],
  declarations: [
    HomeComponent,
    LinkListComponent
  ],
  providers:[
    LinksResolver
  ],
})
export class HomeModule { }
