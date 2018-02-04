import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IEnquireUser, EnquiryService } from 'app/enquire';

@Injectable()
export class EnquireResolver implements Resolve<Observable<IEnquireUser[]>> {
    enquiries: Observable<IEnquireUser[]>;

    constructor(private _enquireService: EnquiryService) { }

    resolve(): Promise<Observable<IEnquireUser[]>> {
        this.enquiries = this._enquireService.getEnquiredList();
        return new Promise((resolve, reject) => {
            this.enquiries.subscribe(() => resolve(this.enquiries), reject);
        });
    }
}
