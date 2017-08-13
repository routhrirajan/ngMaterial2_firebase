import { Component, OnInit } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material'
import { CategoriesListComponent, CategoryDetailComponent, ICategories } from './index';
import { CategoriesService } from './services/categories.service'


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']  
})
export class CategoriesComponent implements OnInit {
 
  category: ICategories;
  constructor(
     private categoryDialog: MdDialog,
     private snackbar: MdSnackBar,   
     private _categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    
  }
  openAddCategory() {
    this.categoryDialog
      .open(CategoryDetailComponent)
      .afterClosed()
      .filter(result => !!result)
      .subscribe(category => {
        this._categoriesService.createCategory(category.value);
        this.snackbar.open(
       "Category Added",
       "OK",
      {
        duration: 6000
      });
      })
  }
}
