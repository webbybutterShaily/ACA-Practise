import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeCensusService } from 'src/app/service/employee-census.service';

@Component({
  selector: 'app-census-conformation',
  templateUrl: './census-conformation.component.html',
  styleUrls: ['./census-conformation.component.css']
})
export class CensusConformationComponent implements OnInit {


  ishide: boolean = false;
  empldetails: any = [];
  cust_id: any
  Empdetails1: any = []
  result: any = []
  thirdremove: boolean = false;
  success: boolean = false;
  status: any;
  errorMessage: any;
  response: any;
  errortext: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private censusservice: EmployeeCensusService,
    private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getcustomerid();

  }

  getcustomerid() {
    const id = localStorage.getItem('dataSource')
    this.cust_id = id

  }
  Checkrecords() {
    this.empldetails = this.data
    this.Empdetails1 = JSON.stringify(this.empldetails)
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: this.Empdetails1
    }

    this.http
      .delete('https://dev.api.syncstream.io/api/employee/check-employees-with-associated-records', options)
      .subscribe(result => {
        this.response = result
        if (this.response.result === true) {
          this.thirdremove = true
          this.errortext = this.response.errorText
        } else {
          const options = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            }),
            body: this.Empdetails1
          }
          this.http
            .delete('https://dev.api.syncstream.io/api/employee/delete-multiple-employees', options)
            .subscribe(result => {
              this.success = true
            })
        }
      })
  }

  Deleterecor() {

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: this.Empdetails1
    }

    this.http
      .delete('https://dev.api.syncstream.io/api/employee/delete-multiple-employees', options)
      .subscribe(result => {
        this.success = true;
      })
  }
  
}
