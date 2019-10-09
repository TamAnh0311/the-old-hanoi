import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { GalleryImage } from '../models/galleryImage.model';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database-deprecated'
import { FirebaseListObservable, FirebaseObjectObservable } from '@angular/fire/database-deprecated';
import { Upload } from '../models/upload.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private basePath = '/upload';
  private upload: FirebaseListObservable<GalleryImage[]>;

  constructor(
    private ngFire: AngularFireModule,
    private db: AngularFireDatabase,
    private firestore: AngularFirestore
    
  ) { }

  uploadFile(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
        console.log("snapshot", upload.progress);
      },
      (error) => {
        console.log(error);
        
      },
      (): any => {
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          upload.url=downloadURL
          console.log(upload.url);
        });
        upload.name === upload.file.name;
        this.saveFileData(upload);
      }
    );
  }
  private saveFileData(upload: Upload) {

    this.db.list(`images`).push(upload);
  }
}

