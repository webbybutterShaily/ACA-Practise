import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confomation',
  templateUrl: './delete-confomation.component.html',
  styleUrls: ['./delete-confomation.component.css']
})
export class DeleteConfomationComponent implements OnInit {

  public Break_Name: any;
  public tax_year: any;
  customerid: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient) { }


  ngOnInit(): void {
    this.GetData();
  }
  GetData() {
    this.Break_Name = this.data.Bname;
    this.tax_year = this.data.Tyear;
    const Cust_id = localStorage.getItem('dataSource');
    this.customerid = Cust_id;
  }
  RemoveSchoolBreaks() {
    this.http
      .delete<any>(`https://dev.api.syncstream.io/api/breaksInService/deleteSchoolBreakForCustomerIDTaxYearBreakName/${this.customerid}/${this.tax_year}/${this.Break_Name}`)
      .subscribe((res) => {
        window.location.reload()
      })
  }
}
