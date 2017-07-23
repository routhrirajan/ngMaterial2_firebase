import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

import { ILinkItem } from './interfaces/';
import { Animations, AnimationsService } from '../shared/';
import { MdDialog, MdSnackBar } from '@angular/material'
import { EnquireComponent, IEnquireUser } from '../enquire/index'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends Animations implements OnInit{
enquireUsers: IEnquireUser[] = [];;
 public links: FirebaseListObservable<ILinkItem[]>;

  /**
   * Constructor of the class
   *
   * @param {ActivatedRoute}    activatedRoute
   * @param {AnimationsService} animationsService
   */
  constructor(
    protected animationsService: AnimationsService,
    private activatedRoute: ActivatedRoute,
    private enquireDialog : MdDialog,
    private snackbar : MdSnackBar
  ) {
    super(animationsService);
  }

  public ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.links = data['links'];
    });
  }
  openEnquireDialog(){
    this.enquireDialog.open(EnquireComponent).afterClosed()
    .filter(result => !!result)
    .subscribe(enquireUser => {
      this.enquireUsers.push(enquireUser.value);
      console.log(this.enquireUsers);
      this.snackbar.open(
       "Your enquiry has been submitted. Our representative will call you shortly",
       "OK",
      {
        duration: 6000
      });
    });
  }

}
