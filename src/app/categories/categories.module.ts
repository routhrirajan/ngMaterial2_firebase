import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component'
import { CategoriesListComponent, CategoryDetailComponent, CategoriesService } from './index';

@NgModule({
    imports: [
        SharedModule,
        CategoriesRoutingModule,
    ],
    exports: [
        CategoriesComponent,
        CategoryDetailComponent
    ],
    declarations: [
        CategoriesComponent,
        CategoryDetailComponent,
        CategoriesListComponent,
    ],
    entryComponents: [
        CategoryDetailComponent
    ],
    providers: [
        CategoriesService
    ],
})
export class CategoriesModule { }
