import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, pairwise, share, throttleTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginComponent } from '../../user/user-login/user-login.component'
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})

export class HeaderComponent implements AfterViewInit {
  isVisible = true;
  isCollapsed = false;
  user: Observable<firebase.User>
  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  constructor(
    private loginDialog: MatDialog, 
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const goingUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const goingDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    goingUp$.subscribe(() => (this.isVisible = true));
    goingDown$.subscribe(() => (this.isVisible = false));
  }

  ngOnInit(): void {
    this.user = this.authService.authUser();
  }

  logOut() {    
    this.authService.logOut().then(onResolve => {
      this.router.navigate['/']
    });
    console.log("logged out");
  }

  openLoginDialog() {
    this.loginDialog.open(UserLoginComponent, {
      height: 'auto',
      width: 'auto',
    });
  }

}
