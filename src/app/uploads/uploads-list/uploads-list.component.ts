import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UploadService } from '../shared/upload.service';
import { Upload } from '../shared/upload';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'uploads-list',
  templateUrl: './uploads-list.component.html',
  styleUrls: ['./uploads-list.component.css']
})
export class UploadsListComponent implements OnInit {

  uploads: Observable<Upload[]>;
  showSpinner = true;

  constructor(private upSvc: UploadService) { }

  ngOnInit() {
    this.uploads = this.upSvc.getUploads();
    this.uploads.subscribe(() => this.showSpinner = false)
  }


}
