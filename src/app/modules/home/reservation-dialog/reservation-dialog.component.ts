import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Time } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import * as moment from 'moment';



@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.css']
})
export class ReservationDialogComponent implements OnInit {

  name: string;
  phone: string;
  email: string;
  agency: string;
  date: Date;
  time: Time;
  seat: string;
  people: number;
  specialRequest: string;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ReservationDialogComponent>
  ) { }

  ngOnInit() {
  }

  btnReservation() {
    console.log("reservated");
    let customer = {
      name : this.name,
      phone : this.phone,
      email : this.email,
      agency : this.agency,
      date : moment(this.date).format('DD-MMM-YYYY'),
      time : this.time,
      seat : this.seat,
      people : this.people,
      specialRequest : this.specialRequest
    }
    console.log("customer", customer);
    
  }

  btnClose() {
    this.dialogRef.close();
  }
}
