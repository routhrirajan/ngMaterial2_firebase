import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { ICategories } from '../interfaces/';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoriesService {

  private basePath = '/categories';

  categories: AngularFireList<ICategories>; //  list of objects
  category: AngularFireObject<ICategories>; //   single object
  exists;

  constructor(private db: AngularFireDatabase) {
    this.categories = this.db.list(`${this.basePath}`);
  }

  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getCategoriesList(): Observable<ICategories[]> {
    return this.categories.snapshotChanges().map((arr) => {
      return arr.map((snap) => Object.assign(snap.payload.val(), { $key: snap.key }) );
    });
  }

  // Return a single observable category
  getCategory(key: string): Observable<ICategories | null> {
    const categoryPath = `${this.basePath}/${key}`;
    const category = this.db.object(categoryPath).valueChanges() as Observable<ICategories | null>;
    return category;
  }

  // Return a single observable category
  checkIfCategoryExists(name: string): any {
    name = name.toLowerCase();
    const categoryPath =  `${this.basePath}`;
     this.categories = this.db.list(categoryPath, ref => ref.orderByChild('name').equalTo('name'));
     this.categories.valueChanges().subscribe(snapshot => {
      this.exists = snapshot.length > 0 ? { validCategory : {
        valid: false
      }} : null
     })
     return this.exists;
  }

  // Create a brand new category
  createCategory(category: ICategories): void  {
    this.categories.push(category)
  }

  // Update an exisiting item
  updateCategory(key: string, value: any): void {
    this.categories.update(key, value);
  }

  // Deletes a single item
  deleteCategory(key: string): void {
      this.categories.remove(key);
  }

  // Deletes the entire list of items
  deleteAll(): void {
      this.categories.remove();
  }
  // Default error handling for all actions
  private handleError(error) {
    console.error(error)
  }


}
