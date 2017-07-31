import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ILinkItem } from '../interfaces/';

@Injectable()
export class LinksResolver implements Resolve<any> {
    links: FirebaseListObservable<any[]>; 
    /**
     * Constructor of the class.
     *
     * @param {AngularFire} angularFire
     */
    constructor(private angularFire: AngularFireDatabase) { }

    /**
     * Resolve method to get current user to-do items from Firebase.
     *
     * Note that this method relies that 'AuthenticationGuard' is run within route 'canActivate' block.
     *
     * @param {ActivatedRouteSnapshot}  route
     * @param {RouterStateSnapshot}     state
     * @returns {Promise<FirebaseListObservable<ILinkItem[]>>}
     */
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<FirebaseListObservable<ILinkItem[]>> {
        
        if (localStorage.getItem("uid"))
            this.links = this.angularFire.list('/links');       
        else
            this.links = this.angularFire.list('/dummylinks');

        return new Promise((resolve, reject) => {
            this.links.subscribe(() => resolve(this.links), reject);
        });
    }    
}
