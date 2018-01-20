import { Component, OnInit, Input } from '@angular/core';
import { UploadService } from '../../uploads/shared/upload.service';
import { Upload } from '../../uploads/shared/upload';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {

  uploads: FirebaseListObservable<Upload[]>;
  showSpinner = true;

  constructor(private upSvc: UploadService) { }

  ngOnInit() {
    this.uploads = this.upSvc.getUploads({limitToLast: 5})
    this.uploads.subscribe(() => this.showSpinner = false)
  }

}
