import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'
import { EnquireComponent } from './enquire.component';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [
        EnquireComponent
    ],
    declarations: [
        EnquireComponent
    ],
    entryComponents:[
        EnquireComponent
    ],
    providers: [],
})
export class EnquireModule{}