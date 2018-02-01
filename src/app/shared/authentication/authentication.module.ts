import { NgModule, ModuleWithProviders } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { environment } from 'environments/environment';
import { AuthenticationGuard } from './authentication.guard';
import { AuthenticationService } from './authentication.service'

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
})

export class AuthenticationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthenticationModule,
      providers: [
        AuthenticationGuard,
        AuthenticationService
      ]
    };
  }
}
