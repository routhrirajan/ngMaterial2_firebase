import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { IEnquireUser } from './../Interfaces'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EnquiryService {
  enquiry: FirebaseListObservable<any>;
  emailSubject: Subject<any>;
  constructor(private angularFiredb: AngularFireDatabase) {
    this.emailSubject = new Subject();
    this.enquiry = angularFiredb.list('/enquiry');
  }
  addEnquiry(detail: IEnquireUser) {
    //let isExist:boolean = this.validateEmail(detail.email);
    this.enquiry.push(detail);
  }
  validateEmail(email: string): boolean {
    let isExists:boolean;   
    const queryObservable = this.angularFiredb.list('/enquiry', {
      query: {
        orderByChild: 'email',
        equalTo: email
      },
      preserveSnapshot:true
    });
    queryObservable.subscribe(snapshot => {
      if(snapshot.values.length == 0)
        isExists= true;
      else
        isExists = false;
    })    
    //queryObservable.find(enquiry => enquiry.email == email);
    // queryObservable.subscribe(queriedItems => {
    //   isExists = queriedItems == null ? true :false; 
    // });
    return isExists;
  }
}