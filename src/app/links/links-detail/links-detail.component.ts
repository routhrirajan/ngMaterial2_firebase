import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material'

import { ILink } from '../interfaces';
import { ICategories, CategoriesService } from "app/categories";
import { LinksService } from '../services' 

@Component({
  selector: 'app-links-detail',
  templateUrl: './links-detail.component.html',
  styleUrls: ['./links-detail.component.css']
})
export class LinksDetailComponent implements OnInit {
linksForm: FormGroup;
link: ILink;
categories: any;
  constructor(
    private fb: FormBuilder,
    private _categoriesService: CategoriesService,
    private _linksService: LinksService,
    private _snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.categories = this._categoriesService.getCategoriesList();
    this.linksForm = this.fb.group({
      //key: [this.link == void 0 ? '' : this.link.$key],
      name: [this.link == void 0 ? '': this.link.name, [Validators.required, Validators.minLength(3)]],
      image: [this.link == void 0 ? '': this.link.image],
      url: [this.link == void 0 ? '' : this.link.url],
      status: [this.link == void 0 ? true : this.link.status],
      category: [this.link == void 0 ? '' : this.link.category],
      //categories: [this.categories]
    })
  }
  onSubmit(){
    console.log(this.linksForm.value, this.linksForm.valid);
    this._linksService.createLink(this.linksForm.value);
    this._snackBar.open("Links Created", "OK");
  }
}
