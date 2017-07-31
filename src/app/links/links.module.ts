import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './index';

@NgModule({
    imports: [
        SharedModule,
        LinksRoutingModule,
    ],
    exports: [
        LinksComponent
    ],
    declarations: [
        LinksComponent
    ],
    providers: [],
})
export class LinksModule { }
