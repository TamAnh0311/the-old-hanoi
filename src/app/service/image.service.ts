import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database-deprecated';
import { FirebaseApp } from '@angular/fire';
import 'firebase/storage';
import {GalleryImage} from '../models/galleryImage.model';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
 

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  uid: string;
  imageRef = firebase.storage().ref('upload');

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private firestore: AngularFirestore
  ) { 
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null){
        this.uid = auth.uid;
      }
    });
  }

  getImages(): Observable<GalleryImage[]> {
    return this.db.list('images')
}
}
