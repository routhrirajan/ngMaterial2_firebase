import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { IEnquireUser } from './../Interfaces'
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/throw';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

@Injectable()
export class EnquiryService {
  enquiry: FirebaseListObservable<any>;    
  emailList: FirebaseObjectObservable<any>;
  isEmailExists: Observable<any[]>;
  constructor(private angularFiredb: AngularFireDatabase) {
    //this.emailSubject = new Subject();
    this.enquiry = angularFiredb.list('/enquiry');
  }
  addEnquiry(detail: IEnquireUser) {
    this.validateEmail(detail.email) 
     
    //this.enquiry.push(detail);
  }
  validateEmail(email: string): void {
      // this.enquiry = this.angularFiredb.list('/enquiry',{
      //   query :{
      //     equalTo: email
      //   } 
      // })
      this.isEmailExists = this.angularFiredb.list('/enquiry')
     
      console.log(this.isEmailExists);
  }
}