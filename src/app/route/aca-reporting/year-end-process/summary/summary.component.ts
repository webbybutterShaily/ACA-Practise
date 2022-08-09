import { Component, OnInit } from '@angular/core';
declare const myclick1: any;

export interface PeriodicElement {
  filedlink: any;
  printtype:any
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  displayedColumns: string[] = ['filedlink', ];
  dataSource: PeriodicElement[] = [
    
      {filedlink:'Total Forms Delivered Electronically',printtype:'1 '},
      {filedlink:'Total Forms Delivered by Mail',printtype:'0 '},
      {filedlink:'Total Number of Forms',printtype:'1 '},
      {filedlink:'Date Forms were Sent Electronically',printtype:' '},
      {filedlink:'Date Forms were Sent by Mail',printtype:'1/1/1900 '},
      {filedlink:'Downloadable Link for all forms:',printtype:' '},
    
    
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    myclick1();
  }
}
