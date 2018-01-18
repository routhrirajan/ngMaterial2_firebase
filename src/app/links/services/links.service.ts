import { Injectable } from '@angular/core';
import { ILink } from '../interfaces/link.interface'
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database'

@Injectable()
export class LinksService {

  private basePath = '/links';

    links: FirebaseListObservable<ILink[]> = null; //  list of objects
    link: FirebaseObjectObservable<ILink> = null; //   single object

    constructor(private db: AngularFireDatabase) {
      this.links = this.db.list(`${this.basePath}`)
     }


    // Return an observable list with optional query
    // You will usually call this from OnInit in a component
    getLinksList(query= {}): FirebaseListObservable<ILink[]> {
      this.links = this.db.list(`${this.basePath}`, {
        query: query
      });
      return this.links
    }

    // Return a single observable link
    getLink(key: string): FirebaseObjectObservable<ILink> {
      const linkPath =  `${this.basePath}/${key}`;
      this.link = this.db.object(linkPath);
      // this.link.subscribe(link => {
      //   return link
      // })
      return this.link
    }

    // Create a brand new link
    createLink(link: ILink): void  {
      this.links.push(link)
        .catch(error => this.handleError(error))
    }


    // Update an existing link
    updateLink(key: string, value: any): void {
      this.links.update(key, value)
        .catch(error => this.handleError(error))
    }

    // Deletes a single link
    deleteLink(key: string): void {
        this.links.remove(key)
          .catch(error => this.handleError(error))
    }

    // Deletes the entire list of links
    deleteAll(): void {
        this.links.remove()
          .catch(error => this.handleError(error))
    }


    // Default error handling for all actions
    private handleError(error) {
      console.log(error)
    }


}
