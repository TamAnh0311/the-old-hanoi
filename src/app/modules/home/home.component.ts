import { Component, OnInit } from '@angular/core';
import { ReservationDialogComponent } from './reservation-dialog/reservation-dialog.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
  public dialog: MatDialog
  ) { }

  ngOnInit() {}


  openDialog() {
    this.dialog.open(ReservationDialogComponent, {
      height: 'auto',
      width: 'auto',
    });
  }
}
