import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './layout/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ModulesComponent } from './modules/modules.component';
import { HomeComponent } from './modules/home/home.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { MenuComponent } from './modules/menu/menu.component';
import { ClassComponent } from './modules/class/class.component';
import { AboutComponent } from './modules/about/about.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ReservationDialogComponent } from './modules/home//reservation-dialog/reservation-dialog.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database-deprecated';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import * as $ from 'jquery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatNativeDateModule, MatSelectModule, MatGridListModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AuthenticationGuardService } from './service/authentication-guard.service';
import { ImageService } from './service/image.service';
import { AuthenticationService } from './service/authentication.service';
import { UploadService } from './service/upload.service';
import { UploadComponent } from './upload/upload.component';
import { PopUpComponent } from './modules/pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ModulesComponent,
    HomeComponent,
    GalleryComponent,
    MenuComponent,
    ClassComponent,
    AboutComponent,
    UserComponent,
    UserLoginComponent,
    ReservationDialogComponent,
    UploadComponent,
    PopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(  environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule
  ],

  exports: [
    MatFormFieldModule,
  ],
  providers: [
    AuthenticationGuardService,
    ImageService,
    AuthenticationService,
    UploadService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ReservationDialogComponent,
    UploadComponent,
    PopUpComponent
  ]
})
  
export class AppModule { }
