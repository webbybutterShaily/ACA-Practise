import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddnewbreakComponent } from '../addnewbreak/addnewbreak.component';
import { DeleteConfomationComponent } from '../delete-confomation/delete-confomation.component';



export interface PeriodicElement {
  taxYear: string;
  breakName: any;
  breakStartDate: any;
  breakEndDate: string;
}

@Component({
  selector: 'app-breaks-in-service',
  templateUrl: './breaks-in-service.component.html',
  styleUrls: ['./breaks-in-service.component.css']
})

export class BreaksInServiceComponent implements OnInit {

  displayedColumns: string[] = ['breakName', 'taxYear', 'breakStartDate', 'breakEndDate', 'editdelete'];
  public dataSource!: MatTableDataSource<PeriodicElement>;


  public customername: any;
  customerid: any;
  Taxyear: any;
  data: any;

  @ViewChild('paginator')
  paginator!: MatPaginator;
  @ViewChild('paginatorPageSize')
  paginatorPageSize!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(
    private dialog: MatDialog,
    private route: Router,
    private http: HttpClient
  ) {


  }



  ngOnInit(): void {
    this.getCutomerName();
    this.GetCustomerId();
    this.getListSchoolBreaks();
  }

  getCutomerName() {
    const cust_name = sessionStorage.getItem('CurrentCustomer');
    this.customername = cust_name;
  }
  GetCustomerId() {
    const id = localStorage.getItem('dataSource');
    this.customerid = id;
    const taxyear = sessionStorage.getItem('CurrentTaxYear');
    this.Taxyear = taxyear;
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddnewbreakComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }

  OpenAssignbreak() {
    this.route.navigateByUrl('admin/breaksinservice/assingbreaks');
  }

  OpenListAssig() {
    this.route.navigateByUrl('admin/breaksinservice/listEmployeeBreaks');
  }

  getListSchoolBreaks() {

    this.http
      .get<any>(`https://dev.api.syncstream.io/api/breaksInService/schoolBreakByCustId/${this.customerid}`)
      .subscribe((res) => {
        this.data = res
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log("this.dataSourcethis.dataSource", this.dataSource);

      })
  }


  RemoveBreaks(Breakname: any, taxyear: any){

    const detalis ={
      Bname :Breakname,
      Tyear :taxyear
    }
      const dialogRef = this.dialog.open(DeleteConfomationComponent, {
        // id: "pop1",
        data: detalis
      });

      dialogRef.afterClosed().subscribe((result: any) => {
      });

    }
}
