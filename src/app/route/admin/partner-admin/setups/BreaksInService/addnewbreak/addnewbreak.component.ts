import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnewbreak',
  templateUrl: './addnewbreak.component.html',
  styleUrls: ['./addnewbreak.component.css']
})
export class AddnewbreakComponent implements OnInit {

  customerId: any;
  taxYear: any;
  breakName: any;
  breakStartDate: any;
  breakEndDate: any;

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe,
    private route: Router,
    public dialogRef: MatDialogRef<AddnewbreakComponent>
  ) { }

  ngOnInit(): void {
    this.GetCustomerId();
  }

  GetCustomerId() {
    const id = localStorage.getItem('dataSource');
    this.customerId = id;
  }
  
  Savebreaklist() {
    const Breaklist = {
      customerId: this.customerId,
      taxYear: this.taxYear,
      breakName: this.breakName,
      breakStartDate: this.datePipe.transform(this.breakStartDate, "yyyy-MM-dd"),
      breakEndDate: this.datePipe.transform(this.breakEndDate, "yyyy-MM-dd")
    }

    this.http
      .post<any>('https://dev.api.syncstream.io/api/breaksInService/AddNewSchoolBreakForCustomerIDAndTaxYear', Breaklist)
      .subscribe((res) => {
        this.dialogRef.close();
        window.location.reload();
      })
  }
}
