import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule, MdIconRegistry } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { MomentModule } from 'angular2-moment';
import { Ng2Webstorage } from 'ng2-webstorage';

import 'hammerjs';

import { AuthenticationModule } from './authentication/authentication.module';
import { Directives } from './directives/';
import { environment } from 'environments/environment';
import { AnimationsService } from './animations/animations.service';


@NgModule({
  declarations: [
    ...Directives,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AuthenticationModule.forRoot(),
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MomentModule,
    Ng2Webstorage,
  ],
  providers: [
    MdIconRegistry,
    AnimationsService,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AuthenticationModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule,
    MomentModule,
    Ng2Webstorage,
    ...Directives,
  ],
})

export class SharedModule { }
