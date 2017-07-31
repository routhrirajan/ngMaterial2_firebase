import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './index';

@NgModule({
    imports: [
        SharedModule,
        CategoriesRoutingModule,
    ],
    exports: [
        CategoriesComponent
    ],
    declarations: [
        CategoriesComponent
    ],
    providers: [],
})
export class CategoriesModule { }
