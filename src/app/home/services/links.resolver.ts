import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { ILink } from '../../links/interfaces/';
import { LinksService } from '../../links/services'
import { Observable } from 'rxjs/Observable';
import { log } from 'util';

@Injectable()
export class LinksResolver implements Resolve<Observable<ILink[]>> {
    links: Observable<ILink[]>;
    /**
     * Constructor of the class.
     *
     * @param {AngularFire} angularFire
     */
    constructor(private angularFire: AngularFireDatabase,
        public _linksService: LinksService,
    ) { }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<Observable<ILink[]>> {
        if (route.params['id']) {
        this.links = this._linksService.getLinksListByCategory(route.params['id']);
        } else {
            this.links = this._linksService.getLinksList();
        }
        return new Promise((resolve, reject) => {
            this.links.subscribe(() => resolve(this.links), reject);
        });
    }
}
