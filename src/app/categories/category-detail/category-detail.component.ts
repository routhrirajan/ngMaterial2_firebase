import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
 categoryForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public categoryDialogRef: MdDialogRef<CategoryDetailComponent>,
  ) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['',],
      active: [false,]
    })
  }

}
