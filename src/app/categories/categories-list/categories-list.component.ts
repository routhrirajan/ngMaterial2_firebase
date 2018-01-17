import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriesService } from '../services'
import { ICategories } from '../interfaces';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material'
import { CategoryDetailComponent } from '../category-detail'
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  categories: any;
  constructor(
    public _categoriesService: CategoriesService,
    private _snackBar: MdSnackBar,
    private _dialog: MdDialog
  ){ }

  ngOnInit() {
    console.log('ngOnInit fired!');
    this.categories = this._categoriesService.getCategoriesList();
  }

  ngOnDestroy() {
    console.log('ngOnDestroy fired!');
  }
  deleteCategory(categoryId: string) {
    this._categoriesService.deleteCategory(categoryId);
    this._snackBar.open('Category deleted', 'OK');
  }
  editCategory(category: ICategories) {
    let _dialogRef: MdDialogRef<CategoryDetailComponent>;
    _dialogRef = this._dialog.open(CategoryDetailComponent);
    _dialogRef.componentInstance.category = category;
    _dialogRef.componentInstance.editMode = true;
    _dialogRef.afterClosed()
    .filter(result => !!result)
    .subscribe(updatedCategory => {
      this._categoriesService.updateCategory(category.$key, updatedCategory.value);
      this._snackBar.open(
       'Category is updated',
       'OK',
      {
        duration: 6000
      });
    });
  }
}
