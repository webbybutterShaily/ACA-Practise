import { Component, OnInit } from '@angular/core';
declare const myTest: any;
declare const myTest1: any;
declare const myTest2: any;
declare const myTest3: any;
declare const myTest4: any;
declare const myTest5: any;
declare const myTest6: any;
declare const myTest7: any;
@Component({
  selector: 'app-yearprocess-navbar',
  templateUrl: './yearprocess-navbar.component.html',
  styleUrls: ['./yearprocess-navbar.component.css']
})
export class YearprocessNavbarComponent implements OnInit {
 public col="red";
 public col1="cyan";
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    myTest();
  }
  onClick1() {
    myTest1();
  }
  onClick2() {
    myTest2();
  }
  onClick3() {
    myTest3();
  }
  onClick4() {
    myTest4();
  }
  onClick5() {
    myTest5();
  }
  onClick6() {
    myTest6();
  }
  onClick7() {
    myTest7();
  }
}
