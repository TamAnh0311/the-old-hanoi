import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { animation } from '@angular/animations';
import { slideAnimation } from './page-slide-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideAnimation,
  ]
})
export class AppComponent {
  title = 'the-old-hanoi';
  router: Router;
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}

