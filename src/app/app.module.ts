import {NgModule} from '@angular/core';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module'
import { SigninModule } from './signin/signin.module'
import { HomeModule } from './home/home.module'
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent   
  ],
  imports: [
    HomeModule,
    AppRoutingModule,
    SharedModule,
    SigninModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
