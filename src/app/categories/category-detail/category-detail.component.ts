import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { CategoriesService } from '../services'
import { ICategories } from '../interfaces'

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryDetailComponent implements OnInit {
  categoryForm: FormGroup;
  categoryNameExists: boolean;
  categoryName: string;
  category: ICategories;
  editMode = false;
  constructor(
    private fb: FormBuilder,
    public categoryDialogRef: MdDialogRef<CategoryDetailComponent>,
    public _categoryService: CategoriesService
  ) {
    this.checkCategoryExists = this.checkCategoryExists.bind(this);
  }
  ngOnInit() {
    this.categoryForm = this.fb.group({
      name: [this.category === void(0) ? '' : this.category.name, [Validators.required, Validators.minLength(3), this.checkCategoryExists]],
      description: [this.category === void(0) ? '' : this.category.description],
      active: [this.category === void(0) ? true : this.category.active]
    })
   // console.log("ngOnInit fired!");
  }

  checkCategoryExists(fieldControl: FormControl): any {

    if (this.editMode && this.categoryName === void 0) {
      this.categoryName = fieldControl.value;
    }
    if (this.editMode && (this.categoryName === fieldControl.value)) {
      return null;
    }
    let result;
    result = this._categoryService.checkIfCategoryExists(fieldControl.value);
    return result;
  }

}
