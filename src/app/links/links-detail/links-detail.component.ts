import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material'

import { ILink } from '../interfaces';
import { ICategories, CategoriesService } from 'app/categories';
import { LinksService } from '../services';
import { Params, ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-links-detail',
  templateUrl: './links-detail.component.html',
  styleUrls: ['./links-detail.component.css']
})
export class LinksDetailComponent implements OnInit {
linksForm: FormGroup;
link: FirebaseObjectObservable<ILink>;
selectedLink: any;
categories: any;
  constructor(
    private fb: FormBuilder,
    private _categoriesService: CategoriesService,
    private _linksService: LinksService,
    private _snackBar: MdSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.route.params.switchMap((params: Params) => this._linksService.getLink(params['id']))
    // .subscribe(link => this.link = link);
    this.route.params.subscribe(params => this.link = this._linksService.getLink(params['id']));
    this.categories = this._categoriesService.getCategoriesList();
    this.link.subscribe(link => {
    this.linksForm = this.fb.group({
      key: [link === void 0 ? '' : link.$key],
      name: [link === void 0 ? '' : link.name, [Validators.required, Validators.minLength(3)]],
      image: [link === void 0 ? '' : link.image],
      url: [link === void 0 ? '' : link.url],
      status: [link === void 0 ? true : link.status],
      category: [link === void 0 ? '' : link.category],
      //categories: [this.categories]
    })
    })
  }
  onSubmit() {
    console.log(this.linksForm.get('key').value);
    if (this.linksForm.get('key').value) {
      this._linksService.updateLink(this.linksForm.get('key').value, this.linksForm.value)
      this._snackBar.open('Links Updated', 'OK');
    } else {
    this._linksService.createLink(this.linksForm.value);
    this._snackBar.open('Links Created', 'OK');
    }
  }
}
