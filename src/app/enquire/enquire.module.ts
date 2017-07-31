import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'
import { EnquireComponent, EnquiryService } from './index';

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
    providers: [EnquiryService],
})
export class EnquireModule{}