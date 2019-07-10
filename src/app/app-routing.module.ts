import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { MenuComponent } from './modules/menu/menu.component';
import { AboutComponent } from './modules/about/about.component';
import { ClassComponent } from './modules/class/class.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'isLeft' } },
  { path: 'gallery', component: GalleryComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'class', component: ClassComponent },
  { path: 'about', component: AboutComponent, data: { animation: 'isRight' } },
  { path: 'login', component: UserLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
