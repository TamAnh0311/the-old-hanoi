import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module'
import { MatDialog, MatDialogRef } from '@angular/material';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  username: string;
  password: string;
  errorMsg: string;
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<UserLoginComponent>,
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  btnClose() {
    this.dialogRef.close();
  }

  btnLogin() {
    this.authService.logIn({ email: this.username, password: this.password })
      .then(resove => {
        this.router.navigate(['gallery'])
        this.btnClose();
      })
      .catch(error => {
        console.log("error", error)
        this.errorMsg = error.code;
      });;
  }
}
