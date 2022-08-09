import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlanserviceService {
  
  constructor(public http:HttpClient) { }
  getdata(id:any){
    let url = `https://dev.api.syncstream.io/api/plan-builder/${id}`
   return this.http.get(url)
  }
  createplan(data:any){
  let url="https://dev.api.syncstream.io/api/plan-builder"
  
    return this.http.post(url,data)
  }

  savePlanAssignment(data:any){
    let url="https://dev.api.syncstream.io/api/employee-coverage-offers/multiple-employees-coverages-with-dependents"
    
      return this.http.post(url,data)
    }

  remove(data:any){
    let url = "https://dev.api.syncstream.io/api/employee-coverage-offers"
    return this.http.post(url,data)
  }
  

}
