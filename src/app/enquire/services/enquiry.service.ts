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
  addEnquiry(detail: IEnquireUser) {
    //this.validateEmail(detail.email);
  }
  // validateEmail(email: string): void {
  //     this.isEmailExists = this.angularFiredb.list('/enquiry')
  //     console.log(this.isEmailExists);
  // }
}
