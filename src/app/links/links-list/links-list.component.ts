import { Component, Input, OnInit } from '@angular/core';
import { LinksService } from '../services'
import { ILink } from '../interfaces'
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.css']
})
export class LinksListComponent {
links: any;
selectedLink: ILink;
  constructor(
    public router:Router, 
    public _linksService: LinksService,
    private _snackBar: MdSnackBar,
    ) { }

 ngOnInit(){
   this.links = this._linksService.getLinksList();
 } 

 deleteLink(linkId: string){
  this._linksService.deleteLink(linkId);
  this._snackBar.open("Link deleted", "OK");
 }
}
