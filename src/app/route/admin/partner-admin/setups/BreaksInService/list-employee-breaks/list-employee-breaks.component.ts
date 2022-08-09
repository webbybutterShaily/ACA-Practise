import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement1 {
  id: string;
  name: any;
  year: any;
  break: string;
  startdate:any;
  enddate:any;
  
}

@Component({
  selector: 'app-list-employee-breaks',
  templateUrl: './list-employee-breaks.component.html',
  styleUrls: ['./list-employee-breaks.component.css']
})
export class ListEmployeeBreaksComponent implements OnInit {

  displayedColumns1: string[] = ['id', 'name','year', 'break', 'startdate','enddate'];
  dataSource: PeriodicElement1[] = [

  {id: '2021',   name: "Test Break 1",  year: "2022", break: 'break',startdate:"7/12/2022",enddate:"7/12/2022"},
  {id: '2020',   name: "Test Break 1",  year: "2022", break: 'break',startdate:"7/12/2022",enddate:"7/12/2022"},

  {id: '2019',   name: "Test Break 1",  year: "2022", break: 'break',startdate:"7/12/2022",enddate:"7/12/2022"},

  {id: '2023',   name: "Test Break 1",  year: "2022", break: 'break',startdate:"7/12/2022",enddate:"7/12/2022"},
  {id: '2024',   name: "Test Break 1",  year: "2022", break: 'break',startdate:"7/12/2022",enddate:"7/12/2022"},
  {id: '2018',   name: "Test Break 1",  year: "2022", break: 'break',startdate:"7/12/2022",enddate:"7/12/2022"},

  ]
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
  constructor() { }

  ngOnInit(): void {
  }

}
