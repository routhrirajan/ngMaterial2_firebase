import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ILink } from 'app/links/interfaces';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  public links: Observable<ILink[]>;
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.links = data['links'];
    });
  }

}
