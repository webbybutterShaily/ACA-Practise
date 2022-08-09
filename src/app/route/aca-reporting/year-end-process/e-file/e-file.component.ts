import { Component, OnInit } from '@angular/core';
declare const myTest6: any;
@Component({
  selector: 'app-e-file',
  templateUrl: './e-file.component.html',
  styleUrls: ['./e-file.component.css']
})
export class EFileComponent implements OnInit {
 public msg1:string="Accepted With Errors";
 public msg2:string=" 1094-C-20-00179847 ";
 public datetime:string="3/12/2020 11:57 PM";
 public fulltimeCount:any={
  "Jan":33,
  "Feb":31,
  "Mar":32,
  "Apr":30,
  "May":31,
  "Jun":31,
  "Jul":31,
  "Aug":30,
  "Sep":28,
  "Oct":28,
  "Nov":28,
  "Dec":29,
 }
 public totalCount:any={
  "Jan":90,
  "Feb":93,
  "Mar":93,
  "Apr":92,
  "May":92,
  "Jun":98,
  "Jul":100,
  "Aug":103,
  "Sep":108,
  "Oct":110,
  "Nov":111,
  "Dec":110,
 }
 public name:string=' PROFESSIONAL SOURCE';
 public ein:string='26-4520482';
 public address:string=' 3535 LARIMER';
 public city:string='DENVER';
 public state:string=' CO';
 public zip:string='80205';
 public cperson:string='JOLYNN OR KEVIN';
 public cnumber:string='3038611181';
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    myTest6();
  }
}
