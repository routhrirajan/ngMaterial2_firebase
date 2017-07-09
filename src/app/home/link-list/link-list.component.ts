import { Component, Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent {
  @Input()
  links: any;

  @Input()
  className: string;

  constructor(
    public af: AngularFireAuth,
    public router: Router
  ) { }
}
