import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material'

import { ILink } from '../interfaces';
import { ICategories, CategoriesService } from 'app/categories';
import { LinksService } from '../services';
import { ActivatedRoute } from '@angular/router';
import { ImagesListComponent } from 'app/links/images-list/images-list.component';

@Component({
  selector: 'app-links-detail',
  templateUrl: './links-detail.component.html',
  styleUrls: ['./links-detail.component.css']
})
export class LinksDetailComponent {
  linksForm: FormGroup;
  link: any;
  categories: any;
  constructor(
    private fb: FormBuilder,
    private _categoriesService: CategoriesService,
    private _linksService: LinksService,
    private _snackBar: MdSnackBar,
    private _dialog: MdDialog,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  createForm() {
    this.route.params.subscribe(params => this.link = this._linksService.getLink(params['id']));

    this.link.subscribe(link => {
      this.linksForm = this.fb.group({
        key: [link === void 0 ? '' : link.$key],
        name: [link === void 0 ? '' : link.name, [Validators.required, Validators.minLength(3)]],
        image: [link === void 0 ? '' : link.image],
        url: [link === void 0 ? '' : link.url],
        status: [link === void 0 ? true : link.status],
        category: [link === void 0 ? '' : link.category],
      })
    })
    this.categories = this._categoriesService.getCategoriesList();
  }
  openChooseGallery() {
    let _dialogRef: MdDialogRef<ImagesListComponent>;
    _dialogRef = this._dialog.open(ImagesListComponent);
  }
  onSubmit() {
    if (this.linksForm.get('key').value) {
      this._linksService.updateLink(this.linksForm.get('key').value, this.linksForm.value)
      this._snackBar.open('Links Updated', 'OK');
    } else {
      this._linksService.createLink(this.linksForm.value);
      this._snackBar.open('Links Created', 'OK');
    }
  }
}
