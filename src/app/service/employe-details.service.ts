import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeDetailsService {

  constructor(private http: HttpClient) { }

  getEmployeeDetails(customerId: any) {
    
    return this.http.get('https://dev.api.syncstream.io/api/employee/drop-down/get-employeeid-employeename' + '/' + customerId)
  }

  GetEmpProfileDetails(customerid:any,Employeeid:any){
    return this.http.get('https://dev.api.syncstream.io/api/employee' + '/' + customerid + '/' + Employeeid)
  }

  GetCurrentOffer(customerid:any,Employeeid:any){
    return this.http.get('https://dev.api.syncstream.io/api/employee-coverage-offers' + '/' + customerid + '/' + Employeeid)
  }

}
