import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireList } from 'angularfire2/database';

import { ILinkItem } from './interfaces/';
import { Animations, AnimationsService } from '../shared/';
import { MatDialog, MatSnackBar } from '@angular/material'
import { EnquireComponent, IEnquireUser, EnquiryService } from '../enquire/index'
import { ICategories, CategoriesService } from 'app/categories';
import { Observable } from 'rxjs/Observable'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends Animations implements OnInit {
  categories: any;
 public links: Observable<ILinkItem[]>;

  /**
   * Constructor of the class
   *
   * @param {ActivatedRoute}    activatedRoute
   * @param {AnimationsService} animationsService
   */
  constructor(
    protected animationsService: AnimationsService,
    private activatedRoute: ActivatedRoute,
    private enquireDialog: MatDialog,
    private snackbar: MatSnackBar,
    private _categoriesService: CategoriesService,
    private _enquiryService: EnquiryService
  ) {
    super(animationsService);
  }

  public ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.links = data['links'];
    });
    this.categories = this._categoriesService.getCategoriesList();
  }
  openEnquireDialog() {
    this.enquireDialog.open(EnquireComponent).afterClosed()
    .filter(result => !!result)
    .subscribe(enquireUser => {
      this._enquiryService.addEnquiry(enquireUser.value);
      this.snackbar.open(
       'Your enquiry has been submitted. Our representative will call you shortly',
       'OK',
      {
        duration: 6000
      });
    });
  }

}
