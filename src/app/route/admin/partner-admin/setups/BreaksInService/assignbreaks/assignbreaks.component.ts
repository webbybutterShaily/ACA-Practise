import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
  Year: string;
  Breaksname: any;
  Startdate: any;
  Enddate: string;
}
export interface PeriodicElement1 {
  Year: string;
  Breaksname: any;
  Startdate: any;
  Enddate: string;
  emp: any;
  emptype: any;
  PayType: any;
  HomeLocation: any;
}


@Component({
  selector: 'app-assignbreaks',
  templateUrl: './assignbreaks.component.html',
  styleUrls: ['./assignbreaks.component.css']
})
export class AssignbreaksComponent implements OnInit {
  displayedColumns: string[] = ['select', 'Year', 'Breaksname', 'Startdate', 'Enddate',];
  displayedColumns1: string[] = ['select', 'Year', 'Breaksname', 'Startdate', 'Enddate', 'emp', 'emptype', 'PayType', 'HomeLocation'];
  dataSource: PeriodicElement[] = [
    // { Year: '2022', Breaksname: "Test Break 1", Startdate: "5/24/2022", Enddate: '7/24/2022' },
    // { Year: '2022', Breaksname: "Test Break 2", Startdate: "7/25/2022", Enddate: '7/24/2022' },
  ];
  dataSource1: PeriodicElement1[] = [
    // { Year: '2022', Breaksname: "Test Break 1", Startdate: "5/24/2022", Enddate: '7/24/2022', emp: "active", emptype: "tyepe1", PayType: "Monthly", HomeLocation: "hl" },
    
  ];


  constructor(private http:HttpClient) { }

  TableData = new MatTableDataSource(this.dataSource);
  dataSourceWithPageSize = new MatTableDataSource(this.dataSource);
  @ViewChild('paginator')
  paginator!: MatPaginator;
  @ViewChild('paginatorPageSize')
  paginatorPageSize!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.TableData.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize; 
    this.TableData.sort = this.sort;
    
  }

  ngOnInit(): void {
  }

 
}
