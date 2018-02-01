import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'app/shared/authentication/authentication.guard';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  //{ path: 'uploads', loadChildren: "./uploads/shared/upload.module#UploadModule" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [AuthenticationGuard],
})

export class AppRoutingModule { }
