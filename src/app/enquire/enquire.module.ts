import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'
import { EnquireComponent, EnquiryService, EnquireListComponent } from './index';
import { EnquiryRoutingModule } from 'app/enquire/enquiry-routing.module';

@NgModule({
    imports: [
        SharedModule,
        EnquiryRoutingModule
    ],
    exports: [
        EnquireComponent,
        EnquireListComponent
    ],
    declarations: [
        EnquireComponent,
        EnquireListComponent
    ],
    entryComponents: [
                EnquireComponent
    ],
    providers: [EnquiryService],
})
export class EnquireModule { }
