import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YearendserviceService {


  private sharedData: Subject<any> = new Subject<any>();
  sharedData$: Observable<any> = this.sharedData.asObservable();
  selectedyear: any


  constructor(private http: HttpClient) { }


  Savecseries(Data: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IklOU1RBLldFQiIsInJvbGUiOiJBUFAuWkVSTyIsIkFMIjoiMCIsIm5iZiI6MTY1MjI2NzU0MywiZXhwIjoxNjUyMjg5MTQzLCJpYXQiOjE2NTIyNjc1NDMsImlzcyI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSIsImF1ZCI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSJ9.Y8z_f1G6Mlw_iGLN5SkL90TI_E2VJLI-XOgJI8IPy18',
      })
    };

    return this.http.post('https://dev.api.syncstream.io/api/year-end/reporting-essentials/c-series', Data, httpOption)

  }

  setData(updatedData: any) {
    this.sharedData.next(updatedData);
  }

  GetCustomers(customerID: any) {
    return this.http.get('https://dev.api.syncstream.io/api/customer' + '/' + customerID)
  }

  GetyearEndData(customerID: any, taxYear: any) {
    return this.http.get('https://dev.api.syncstream.io/api/year-end/reporting-essentials/c-series' + '/' + customerID + '/' + taxYear)
  }

  setCustYear(val: any) {
    this.selectedyear = val;
  }
  getCustYear() {
    return this.selectedyear
  }

  UpdateCseries(Data: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IklOU1RBLkFQUCIsInJvbGUiOiJBUFAuWkVSTyIsIkFMIjoiMCIsIm5iZiI6MTY1MjMyNjU5OSwiZXhwIjoxNjUyMzQ4MTk5LCJpYXQiOjE2NTIzMjY1OTksImlzcyI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSIsImF1ZCI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSJ9.YyGSxcnnGbOIZPywRL-Uq4VpR7JJ8ybKx6bozhcDie8',
      })
    };

    return this.http.put('https://dev.api.syncstream.io/api/year-end/reporting-essentials/c-series', Data, httpOption)

  }
  // Affordability page service

  getDoughnutValue(customerID: any, taxYear: any) {
    let url = `https://dev.api.syncstream.io/api/affordability-calculator/w2-wages-safe-harbor/get-w2-wages-safeHarbor-count-by-customerId-taxYear/${customerID}/${taxYear}`
    return this.http.get(url)
  }

  getDoughnutValueRateOfPay(customerID: any, taxYear: any) {
    let url = `https://dev.api.syncstream.io/api/affordability-calculator/rateofpay-safe-harbor/get-rateofpay-safeHarbor-count-by-customerId-taxYear/${customerID}/${taxYear}`
    return this.http.get(url)
  }

  getDoughnutValueFPLSafe(customerID: any, taxYear: any) {
    let url = `https://dev.api.syncstream.io/api/affordability-calculator/fpl-safe-harbor/get-fpl-safeHarbor-count-by-customerId-taxYear/${customerID}/${taxYear}`
    return this.http.get(url)
  }
  listW2SafeHarbor(customerID: any, taxYear: any) {
    let url = `https://dev.api.syncstream.io/api/affordability-calculator/w2-wages-safe-harbor/get-w2-wages-employees-by-customerId-taxYear/${customerID}/${taxYear}`
    return this.http.get(url)
  }

  listRateOfPaySafeHarbor(customerID: any, taxYear: any) {
    let url = `https://dev.api.syncstream.io/api/affordability-calculator/rateofpay-safe-harbor/get-rateofpay-employees-by-customerId-taxYear/${customerID}/${taxYear}`
    return this.http.get(url)
  }

  listFPlSafeHarbor(customerID: any, taxYear: any) {
    let url = `https://dev.api.syncstream.io/api/affordability-calculator/fpl-safe-harbor/get-fpl-employees-by-customerId-taxYear/${customerID}/${taxYear}`
    return this.http.get(url)
  }


  // Update wages

  getW2Wages(customerID: any, taxYear: any) {
    let url = `https://dev.api.syncstream.io/api/affordability-calculator/w2-wages/${customerID}/${taxYear}`
    return this.http.get(url)
  }
  getROPWages(customerID: any, taxYear: any) {
    let url = `https://dev.api.syncstream.io/api/affordability-calculator/rate-of-pays/${customerID}/${taxYear}`
    return this.http.get(url)
  }

  updateW2Wages(Data: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IklOU1RBLldFQiIsInJvbGUiOiJBUFAuWkVSTyIsIkFMIjoiMCIsIm5iZiI6MTY1MjI2NzU0MywiZXhwIjoxNjUyMjg5MTQzLCJpYXQiOjE2NTIyNjc1NDMsImlzcyI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSIsImF1ZCI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSJ9.Y8z_f1G6Mlw_iGLN5SkL90TI_E2VJLI-XOgJI8IPy18',
      })
    };

    return this.http.post(' https://dev.api.syncstream.io/api/affordability-calculator/w2-wages', Data, httpOption)

  }
  updateROPWages(Data: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IklOU1RBLldFQiIsInJvbGUiOiJBUFAuWkVSTyIsIkFMIjoiMCIsIm5iZiI6MTY1MjI2NzU0MywiZXhwIjoxNjUyMjg5MTQzLCJpYXQiOjE2NTIyNjc1NDMsImlzcyI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSIsImF1ZCI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSJ9.Y8z_f1G6Mlw_iGLN5SkL90TI_E2VJLI-XOgJI8IPy18',
      })
    };

    return this.http.post('https://dev.api.syncstream.io/api/affordability-calculator/rate-of-pays ', Data, httpOption)

  }

  removeW2Wages(data:any){
   
    let url = "https://dev.api.syncstream.io/api/affordability-calculator/w2-wages"
    return this.http.delete(url,data)
  }
  /* Affordability Assignment */

  GetW2safeharbor(customer_id:any, taxyear:any){
    return this.http.get(`https://dev.api.syncstream.io/api/affordability-calculator/w2-wages-safe-harbor/check-has-w2-data/${customer_id}/${taxyear}`)
  }
  

  GetRateofpaysafeharbor(customer_id:any, taxyear:any){
    return this.http.get(`https://dev.api.syncstream.io/api/affordability-calculator/rateofpay-safe-harbor/check-has-rateofpay-data/${customer_id}/${taxyear}`)
  }
  

  GetFplsafeharbor(customer_id:any, taxyear:any){
    return this.http.get(`https://dev.api.syncstream.io/api/affordability-calculator/fpl-safe-harbor/check-has-fpl-data/${customer_id}/${taxyear}`)
  }
}
