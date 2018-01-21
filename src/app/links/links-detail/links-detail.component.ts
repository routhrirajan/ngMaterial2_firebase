import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material'

import { ILink } from '../interfaces';
import { ICategories, CategoriesService } from 'app/categories';
import { LinksService } from '../services';
import { ActivatedRoute } from '@angular/router';
import { ImagesListComponent } from 'app/links/images-list/images-list.component';
import { log } from 'util';

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
        key: [link.key === void 0 ? '' : link.$key],
        name: [link.key === void 0 ? '' : link.name, [Validators.required, Validators.minLength(3)]],
        image: [link.key === void 0 ? 'assets/images/noimage.jpg' : link.image],
        url: [link.key === void 0 ? '' : link.url],
        status: [link.key === void 0 ? true : link.status],
        category: [link.key === void 0 ? '' : link.category],
      })
    })
    this.categories = this._categoriesService.getCategoriesList();
  }
  openChooseGallery() {
    let _dialogRef: MdDialogRef<ImagesListComponent>;
    _dialogRef = this._dialog.open(ImagesListComponent);
    _dialogRef.afterClosed()
    .subscribe(result => {
      this.linksForm.patchValue({image: result });
    }
     )
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
