import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddestablishmentComponent } from './addestablishment/addestablishment.component';
import { ReportselectorComponent } from './reportselector/reportselector.component';
@Component({
  selector: 'app-employerdata',
  templateUrl: './employerdata.component.html',
  styleUrls: ['./employerdata.component.css']
})
export class EmployerdataComponent implements OnInit {
  public selectedvalue:any
  public b=""
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.b=this.selectedvalue
    
  }
  openDialog() {
    this.dialog.open(AddestablishmentComponent,{width: '60vw',
    maxWidth: '100vw',});
  }
  openreportDialog() {
    this.dialog.open(ReportselectorComponent,{width: '50vw',
    maxWidth: '100vw',});
  }
}
