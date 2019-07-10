import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseApp } from '@angular/fire';
import 'firebase/storage';
import {GalleryImage} from '../models/galleryImage.model';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  uid: string;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
  ) { 
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null){
        this.uid = auth.uid;
      }
    });
  }
  getImages(): Observable<GalleryImage[]> {
    return this.db.list['uploads'];
  }
}
