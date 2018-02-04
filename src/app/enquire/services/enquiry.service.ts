import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { IEnquireUser } from './../Interfaces'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnquiryService {
  enquiry: AngularFireList<IEnquireUser>;
  emailList: AngularFireObject<IEnquireUser>;
  isEmailExists: Observable<IEnquireUser>;
  constructor(private angularFiredb: AngularFireDatabase) {
    this.enquiry = angularFiredb.list('/enquiry');
  }
   // Return an observable list of Items
   getEnquiredList(): Observable<IEnquireUser[]> {
    return this.enquiry.snapshotChanges().map((arr) => {
      return arr.map((snap) => Object.assign(snap.payload.val(), { $key: snap.key }) );
    });
  }
  addEnquiry(detail: IEnquireUser) {
    this.enquiry.push(detail);
  }
}
