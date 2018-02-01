import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material'

import { ILink } from '../interfaces';
import { ICategories, CategoriesService } from 'app/categories';
import { LinksService } from '../services';
import { ActivatedRoute } from '@angular/router';
import { ImagesListComponent } from 'app/links/images-list/images-list.component';
import { log } from 'util';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-links-detail',
  templateUrl: './links-detail.component.html',
  styleUrls: ['./links-detail.component.css']
})
export class LinksDetailComponent implements OnInit, OnDestroy {
  linksForm: FormGroup;
  link: Observable<ILink>;
  categories: any;
  constructor(
    private fb: FormBuilder,
    private _categoriesService: CategoriesService,
    private _linksService: LinksService,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.route.params.subscribe(params => this.link = this._linksService.getLink(params['id']));

    this.link.subscribe(link => {
      this.linksForm = this.fb.group({
        key: [link === null ? '' : link.$key],
        name: [link === null ? '' : link.name, [Validators.required, Validators.minLength(3)]],
        image: [link === null ? 'assets/images/noimage.jpg' : link.image],
        url: [link === null ? '' : link.url],
        status: [link === null ? true : link.status],
        category: [link === null ? '' : link.category],
      })
    })
    this.categories = this._categoriesService.getCategoriesList();
  }
  openChooseGallery() {
    let _dialogRef: MatDialogRef<ImagesListComponent>;
    _dialogRef = this._dialog.open(ImagesListComponent);
    _dialogRef.afterClosed()
    .subscribe(result => {
      if (result !== true) {
      this.linksForm.patchValue({image: result });
      }
    })
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
  ngOnDestroy() {
    this.link = null;
  }
}
