import { Component, Input, OnInit } from '@angular/core';
import { LinksService } from '../services'
import { ILink } from '../interfaces'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.css']
})
export class LinksListComponent implements OnInit {
@Input()
links: Observable<ILink[]>;
  constructor(
    public router: Router,
    public _linksService: LinksService,
    private _snackBar: MatSnackBar,
    ) { }

 ngOnInit() { }

 deleteLink(linkId: string) {
  this._linksService.deleteLink(linkId);
  this._snackBar.open('Link deleted', 'OK');
 }
}
