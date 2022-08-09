import { Component, OnInit } from '@angular/core';
declare const myclick: any;
declare const myclick1: any;
declare const myclick2: any;


@Component({
  selector: 'app-delivery1095-navbar',
  templateUrl: './delivery1095-navbar.component.html',
  styleUrls: ['./delivery1095-navbar.component.css']
})
export class Delivery1095NavbarComponent implements OnInit {
  public col="red";
  public col1="cyan";
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    myclick();
  }
  onClick1() {
    myclick();
  }
  onClick2() {
    myclick2();
  }
 
}
