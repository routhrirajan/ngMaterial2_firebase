import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { ILink } from 'app/links/interfaces';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent {
  @Input()
  links: Observable<ILink[]>;

  @Input()
  className: string;

  constructor(public afAuth: AngularFireAuth) {
  }
}
