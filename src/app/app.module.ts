import {NgModule} from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { SigninModule } from './signin/signin.module'
import { HomeModule } from './home/home.module'
import { EnquireModule } from './enquire/enquire.module'
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent             
  ],
  imports: [
    HomeModule,
    AppRoutingModule,
    SharedModule,
    SigninModule,
    LayoutModule,
    EnquireModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
