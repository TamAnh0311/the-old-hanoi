import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomepageComponent } from './layout/homepage/homepage.component';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ModulesComponent } from './modules/modules.component';
import { HomeComponent } from './modules/home/home.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { MenuComponent } from './modules/menu/menu.component';
import { ClassComponent } from './modules/class/class.component';
import { AboutComponent } from './modules/about/about.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomepageComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ModulesComponent,
    HomeComponent,
    GalleryComponent,
    MenuComponent,
    ClassComponent,
    AboutComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
