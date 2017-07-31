import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './index';

@NgModule({
    imports: [
        SharedModule,
        UsersRoutingModule,
    ],
    exports: [
        UsersComponent
    ],
    declarations: [
        UsersComponent
    ],
    providers: [],
})
export class UsersModule { }
