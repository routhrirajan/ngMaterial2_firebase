import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ICategories } from '../interfaces/';

@Injectable()
export class CategoriesService {

  private basePath = '/categories';

  categories: FirebaseListObservable<ICategories[]> = null; //  list of objects
  category: FirebaseObjectObservable<ICategories> = null; //   single object
  exists;

  constructor(private db: AngularFireDatabase) {
    this.categories = this.db.list(`${this.basePath}`);
  }

  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getCategoriesList(query= {}): FirebaseListObservable<ICategories[]> {
    this.categories = this.db.list(`${this.basePath}`, {
      query: query,
    });
    return this.categories;
  }

  // Return a single observable category
  getCategory(key: string): FirebaseObjectObservable<ICategories> {
    const categoryPath =  `${this.basePath}/${key}`;
    this.category = this.db.object(categoryPath)
    return this.category
  }

  // Return a single observable category
  checkIfCategoryExists(name: string): any {
    name = name.toLowerCase();
    const categoryPath =  `${this.basePath}`;
     this.categories = this.db.list(categoryPath, {
       query: {
        orderByChild: 'name',
        equalTo: name
       },
       preserveSnapshot: true
     });
     this.categories.subscribe(snapshot => {
      this.exists = snapshot.length > 0 ? { validCategory : {
        valid: false
      }} : null
     })
     return this.exists;
  }

  // Create a brand new category
  createCategory(category: ICategories): void  {
    this.categories.push(category)
      .catch(error => this.handleError(error))
  }

  // Update an exisiting item
  updateCategory(key: string, value: any): void {
    this.categories.update(key, value)
      .catch(error => this.handleError(error))
  }

  // Deletes a single item
  deleteCategory(key: string): void {
      this.categories.remove(key)
        .catch(error => this.handleError(error))
  }

  // Deletes the entire list of items
  deleteAll(): void {
      this.categories.remove()
        .catch(error => this.handleError(error))
  }
  // Default error handling for all actions
  private handleError(error) {
    console.log(error)
  }


}
