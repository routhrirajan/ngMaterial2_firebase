import { Component } from '@angular/core';
import { ICategories, CategoriesService } from 'app/categories';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  categories: Observable<ICategories[]>;
  route: string;
  constructor(
    private _categoriesService: CategoriesService,
  ) {
    this.categories = this._categoriesService.getCategoriesList();
  }
}
