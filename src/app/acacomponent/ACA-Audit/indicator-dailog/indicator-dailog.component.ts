import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator-dailog',
  templateUrl: './indicator-dailog.component.html',
  styleUrls: ['./indicator-dailog.component.css']
})
export class IndicatorDailogComponent implements OnInit {
  dropdownList: any;
  selectedItems: any = null
  SummerMessage: any;
  dropdownList1: any
  selectedItems1: any = null
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.Data14()
  
  }

  Data14(): any {
    this.http
      .get<any>(
        'https://dev.api.syncstream.io/api/year-end/reporting-essentials/e-file/code-matrix/line-14-codes'
      )
      .subscribe((data) => {
        this.dropdownList = data;
      });
  }
  Data16() {
    this.dropdownList1=[]
    this.http
      .get<any>(
        `https://dev.api.syncstream.io/api/year-end/reporting-essentials/e-file/code-matrix/line-16-codes/${this.selectedItems}`
      )
      .subscribe((data1) => {
        this.dropdownList1 = data1;
      });
  }
  onOptionsSelected(event:any) {
    this.Data16() 
 }

  getdata() {
    this.http
      .get<any>(
        `https://dev.api.syncstream.io/reefilecodematrixsummary/${this.selectedItems}/${this.selectedItems1}`
      )
      .subscribe((res: any) => {
        this.SummerMessage = res.summary;
        
      });
  }
}
