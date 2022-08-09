import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IndicatorDailogComponent } from 'src/app/acacomponent/ACA-Audit/indicator-dailog/indicator-dailog.component';
import { faTable, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
declare const myclick: any;

export interface PeriodicElement {
  companyname: any;
  electronically: any;
  printtomall: any;
  totalforms: any
}

@Component({
  selector: 'app-print-to-mail',
  templateUrl: './print-to-mail.component.html',
  styleUrls: ['./print-to-mail.component.css']
})
export class PrintToMailComponent implements OnInit {
  displayedColumns: string[] = ['companyname', 'electronically', 'printtomall', 'totalforms'];
  dataSource: PeriodicElement[] = [
    
  ];

  circlecheck = faCircleCheck
  constructor(private dialog: MatDialog,
    private route: Router) { }

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
    myclick();
  }
  openindicatormatix() {
    const dialogRef = this.dialog.open(IndicatorDailogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }
}
