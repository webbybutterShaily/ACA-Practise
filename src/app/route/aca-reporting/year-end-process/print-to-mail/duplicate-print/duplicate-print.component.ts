import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
declare const printnav2: any;
export interface PeriodicElement {
  filedlink: any;
  printtype: any;
  timestamp:any;
  user:any;
  totalforms: any
}

@Component({
  selector: 'app-duplicate-print',
  templateUrl: './duplicate-print.component.html',
  styleUrls: ['./duplicate-print.component.css']
})
export class DuplicatePrintComponent implements OnInit {
  displayedColumns: string[] = ['filedlink', 'printtype' , 'timestamp' , 'user','totalforms'];
  dataSource: PeriodicElement[] = [
    // {
    //   filedlink:'dsjgsds',printtype:'sdsdgsu',timestamp:'adsjgais',user:'wewrw',totalforms:'sjdfashh'
    // },
    // {
    //   filedlink:'dsjgsds',printtype:'sdsdgsu',timestamp:'adsjgais',user:'wewrw',totalforms:'sjdfashh'
    // },
    // {
    //   filedlink:'dsjgsds',printtype:'sdsdgsu',timestamp:'adsjgais',user:'wewrw',totalforms:'sjdfashh'
    // },
    // {
    //   filedlink:'dsjgsds',printtype:'sdsdgsu',timestamp:'adsjgais',user:'wewrw',totalforms:'sjdfashh'
    // },
    // {
    //   filedlink:'dsjgsds',printtype:'sdsdgsu',timestamp:'adsjgais',user:'wewrw',totalforms:'sjdfashh'
    // },
    // {
    //   filedlink:'dsjgsds',printtype:'sdsdgsu',timestamp:'adsjgais',user:'wewrw',totalforms:'sjdfashh'
    // },
    // {
    //   filedlink:'dsjgsds',printtype:'sdsdgsu',timestamp:'adsjgais',user:'wewrw',totalforms:'sjdfashh'
    // },
    // {
    //   filedlink:'dsjgsds',printtype:'sdsdgsu',timestamp:'adsjgais',user:'wewrw',totalforms:'sjdfashh'
    // },
  ];
  constructor() { }
  dataSource1 = new MatTableDataSource(this.dataSource);
  dataSourceWithPageSize = new MatTableDataSource(this.dataSource);
  @ViewChild('paginator')
  paginator!: MatPaginator;
  @ViewChild('paginatorPageSize')
  paginatorPageSize!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource1.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
    this.dataSource1.sort = this.sort;
  }
  ngOnInit(): void {
  }
  onClick() {
    printnav2();
  }
}
