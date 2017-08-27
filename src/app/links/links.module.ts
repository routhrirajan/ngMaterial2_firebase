import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './index';
import { LinksListComponent } from './links-list/links-list.component';
import { LinksDetailComponent } from './links-detail/links-detail.component';
import { LinksDetailRoutingModule } from './links-detail/links-detail-routing.module'
import { LinksService } from './services'

@NgModule({
    imports: [
        SharedModule,
        LinksRoutingModule,
        LinksDetailRoutingModule
    ],
    exports: [
        LinksComponent
    ],
    declarations: [
        LinksComponent,
        LinksListComponent,
        LinksDetailComponent,
    ],
    providers: [
        LinksService
    ],
})
export class LinksModule { }
