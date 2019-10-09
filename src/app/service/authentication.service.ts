import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.model';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user: Observable<firebase.User>
  constructor(
    private afAuth: AngularFireAuth,
  ) {
    this.user = afAuth.authState;
  }

  logIn(user: User) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
  }

  logOut() {
    return this.afAuth.auth.signOut();
  }

  authUser() {
    return this.user;
  }
}
