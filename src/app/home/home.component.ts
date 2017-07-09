import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

import { ILinkItem } from './interfaces/';
import { Animations, AnimationsService } from '../shared/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends Animations implements OnInit{

 public links: FirebaseListObservable<ILinkItem[]>;

  /**
   * Constructor of the class
   *
   * @param {ActivatedRoute}    activatedRoute
   * @param {AnimationsService} animationsService
   */
  constructor(
    protected animationsService: AnimationsService,
    private activatedRoute: ActivatedRoute
  ) {
    super(animationsService);
  }

  public ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.links = data['links'];
    });
  }

}
