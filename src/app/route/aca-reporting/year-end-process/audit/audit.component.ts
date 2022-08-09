import { Component, OnInit } from '@angular/core';
declare const myTest3: any;
@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    myTest3();
  }
}
