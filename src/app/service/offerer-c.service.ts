import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffererCService {

  constructor(public http:HttpClient) { }
  getEmployeeData(id:any){
    let url = `https://dev.api.syncstream.io/api/employee/${id}`
   return this.http.get(url)
  }
  getPlandata(id:any,year:any){
    let url = `https://dev.api.syncstream.io/api/plan-builder/get-all-plans-by-customerid-taxyear/${id}/${year}`
    return this.http.get(url)

  }
  createoffer(data:any){
    let url = `https://dev.api.syncstream.io/api/employee-coverage-offers`
    return this.http.post(url,data)
  }
  createOfc(id:any,year:any){
    let url = `https://dev.api.syncstream.io/api/employee-coverage-offers/get-coverage-with-employee/with-employee-data/${id}/${year}`
    return this.http.get(url)
  }
  
}
