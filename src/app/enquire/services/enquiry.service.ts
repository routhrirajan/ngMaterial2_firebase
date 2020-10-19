import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { IEnquireUser } from './../Interfaces'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnquiryService {
  enquiry: Observable<any[]>;
  constructor(private angularFiredb: AngularFireDatabase) {
    this.enquiry = angularFiredb.list('enquiry', ref => ref.orderByChild('registered').equalTo(false)).valueChanges();
    //this.db.list('/flamelink/users', ref => ref.orderByChild('id').equalTo(id)).valueChanges().subscribe(data => { console.log(data); anotherMethod(data); })
  }
   // Return an observable list of Items
   getEnquiredList(): Observable<IEnquireUser[]> {
     return this.enquiry;
    // return this.enquiry.snapshotChanges().map((arr) => {
    //   return arr.map((snap) => Object.assign(snap.payload.val(), { $key: snap.key }) );
    //});
  }
  addEnquiry(detail: IEnquireUser) {
    const enquiriesRef = this.angularFiredb.list('enquiry');
    enquiriesRef.push(detail);
  }
}
