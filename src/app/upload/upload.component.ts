import { Component, OnInit } from '@angular/core';
import { UploadService } from '../service/upload.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Upload } from '../models/upload.model';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { PopUpComponent } from '../modules/pop-up/pop-up.component';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  files: FileList;
  upload: Upload;
  imageTitle: string;
  describe: string;
  uploadDone = false;

  constructor(
    private dialog: MatDialog,
    private dialogUploadRef: MatDialogRef<UploadComponent>,
    private uploadService: UploadService,
  ) { }

  ngOnInit() {
  }

  handleFile(event) {
    this.files = event.target.files;
  }

  uploadPicture() {
    const filesToUpload = this.files;
    const filesIdx = _.range(filesToUpload.length);
    _.each(filesIdx, (idx) => {
      this.upload = new Upload(filesToUpload[idx]);
      this.uploadService.uploadFile(this.upload);
    })
  }

  closeUploadDialog() {
    const PopupDialogRef = this.dialog.open(PopUpComponent, {
      height: 'auto',
      width: 'auto',
      data: 'Do you want to cancel unfinished upload ?'
    });
    PopupDialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.dialogUploadRef.close();
      }
    })
  }
}
