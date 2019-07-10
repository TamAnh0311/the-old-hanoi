import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map, take} from 'rxjs/operators'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {
  user: Observable<firebase.User>
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.user.pipe(map((auth) => {
      if(!auth) {
        this.router.navigateByUrl('/login');
        return false;
      }
      return true;
    }),take(1))
  }
}
