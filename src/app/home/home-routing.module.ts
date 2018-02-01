import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { AuthenticationGuard } from './../shared';
import { HomeComponent, LinkListComponent, LinksResolver } from './index';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent,
        resolve: {
          links: LinksResolver,
        },
      },
      {
        path: 'home/:id',
        component: HomeComponent,
        resolve: {
          links: LinksResolver,
        },
      }
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class HomeRoutingModule { }
