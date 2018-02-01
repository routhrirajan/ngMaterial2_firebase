import { Injectable } from '@angular/core';
import { ILink } from '../interfaces/link.interface'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LinksService {

  private basePath = 'links';

    links: AngularFireList<ILink>; //  list of objects
    link: AngularFireObject<ILink>; //   single object
    constructor(private db: AngularFireDatabase) {
      this.links = this.db.list(`${this.basePath}`)
     }


    // Return an observable list with optional query
    // You will usually call this from OnInit in a component
    getLinksList(): Observable<ILink[]> {
      return this.links.snapshotChanges().map((arr) => {
        return arr.map((snap) => Object.assign(snap.payload.val(), { $key: snap.key }) );
      });
    }

    // Return an observable list with optional query
    // You will usually call this from OnInit in a component
    getLinksListByCategory(category: string): Observable<ILink[]> {
      this.links = this.db.list(`${this.basePath}`, ref => ref.orderByChild('category').equalTo(category));
      return this.links.snapshotChanges().map((arr) => {
        return arr.map((snap) => Object.assign(snap.payload.val(), { $key: snap.key }) );
      });
    }

    // Return a single observable link
    getLink(key: string): Observable<ILink | null> {
      const linkPath =  `${this.basePath}/${key}`;
      const link = this.db.object(linkPath).valueChanges() as Observable<ILink | null>;
    return link;
    }

    // Create a brand new link
    createLink(link: ILink): void  {
      this.links.push(link);
    }

    // Update an existing link
    updateLink(key: string, value: any): void {
      this.links.update(key, value);
    }

    // Deletes a single link
    deleteLink(key: string): void {
        this.links.remove(key);
    }

    // Deletes the entire list of links
    deleteAll(): void {
        this.links.remove();
    }

    // Default error handling for all actions
    private handleError(error) {
      console.log(error)
    }
}
