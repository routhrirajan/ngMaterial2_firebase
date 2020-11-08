import { Injectable } from '@angular/core';
import { AngularFireAction, AngularFireDatabase, AngularFireList, AngularFireObject, DatabaseSnapshot } from 'angularfire2/database';
import { IEnquireUser } from './../Interfaces'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnquiryService {
  enquiries: Observable<any[]>;
  enquiryRef: AngularFireList<any>;
  constructor(private angularFiredb: AngularFireDatabase) {
    //this.enquiryRef = angularFiredb.list('enquiry');
    this.enquiryRef = angularFiredb.list('enquiry', ref => ref.orderByChild('registered').equalTo(false));
    //this.db.list('/flamelink/users', ref => ref.orderByChild('id').equalTo(id)).valueChanges().subscribe(data => { console.log(data); anotherMethod(data); })
  }
   // Return an observable list of Items
   getEnquiredList(): Observable<IEnquireUser[]> {
     this.enquiries = this.enquiryRef.snapshotChanges().map((arr) => {
      return arr.map((snap) => Object.assign(snap.payload.val(), { $key: snap.key }) );
    });
    return this.enquiries;
  }
  addEnquiry(detail: IEnquireUser) {
    console.log(detail);
    const enquiriesRef = this.angularFiredb.list('enquiry');
    enquiriesRef.push(detail);
  }

  
}
