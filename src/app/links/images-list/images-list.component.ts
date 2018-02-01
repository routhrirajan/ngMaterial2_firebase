import { Component, OnInit, Input } from '@angular/core';
import { UploadService } from '../../uploads/shared/upload.service';
import { Upload } from '../../uploads/shared/upload';
import { Observable } from 'rxjs/Observable';
import { MatDialogRef } from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {

  uploads: Observable<Upload[]>;
  showSpinner = true;

  constructor(private upSvc: UploadService,
    public imageListDialogRef: MatDialogRef<ImagesListComponent>
  ) { }

  ngOnInit() {
    this.uploads = this.upSvc.getUploads();
    this.uploads.subscribe(() => this.showSpinner = false)
  }
}
