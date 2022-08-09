import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, takeLast } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersSetupService {

  private sharedData: Subject<any> = new Subject<any>();
  sharedData$: Observable<any> = this.sharedData.asObservable();

  private customerID: Subject<any> = new Subject<any>();
  customerID$: Observable<any> = this.customerID.asObservable();

  
  private TrackingData: Subject<any> = new Subject<any>();
  TrackingData$: Observable<any> = this.TrackingData.asObservable();

  selectedcustomer: any;

  constructor(private http: HttpClient) {


  }


  setData(updatedData: any) {
    this.sharedData.next(updatedData);
  }

  setId(id: any) {
    this.customerID.next(id);
  }

  settrackingd(Data: any) {
    this.TrackingData.next(Data)
  }

  getNewUserInfo() {
    return this.TrackingData.asObservable();
  }

  setMyGV(val: any) {
    this.selectedcustomer = val;
  }

  getMyGV() {
    return this.selectedcustomer;
  }

  getcustomerdetails(customerName: any) {
    return this.http.get('https://dev.api.syncstream.io/api/customer' + '/' + customerName)
  }

  saveTrackingDetails(Data: any) {

    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IklOU1RBLldFQiIsInJvbGUiOiJBUFAuWkVSTyIsIkFMIjoiMCIsIm5iZiI6MTY1MjI2NzU0MywiZXhwIjoxNjUyMjg5MTQzLCJpYXQiOjE2NTIyNjc1NDMsImlzcyI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSIsImF1ZCI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSJ9.Y8z_f1G6Mlw_iGLN5SkL90TI_E2VJLI-XOgJI8IPy18',
      })
    };

    return this.http.post('https://dev.api.syncstream.io/api/customer-tracking', Data, httpOption)
  }

  getTrackinfDetails(id: any) {
    return this.http.get(`https://dev.api.syncstream.io/api/customer-tracking/${id}`)
  }





  upadateEmployeeDepent(Data: any) {

    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IklOU1RBLldFQiIsInJvbGUiOiJBUFAuWkVSTyIsIkFMIjoiMCIsIm5iZiI6MTY1MjI2NzU0MywiZXhwIjoxNjUyMjg5MTQzLCJpYXQiOjE2NTIyNjc1NDMsImlzcyI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSIsImF1ZCI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSJ9.Y8z_f1G6Mlw_iGLN5SkL90TI_E2VJLI-XOgJI8IPy18',
      })
    };

    return this.http.put('https://dev.api.syncstream.io/api/employee-dependent', Data, httpOption)

  }
  /* ///////////////////// Maintain Customers ///////////////// */

  GetCustomerDetails(id: any) {
    const httpoption = {
      headers: new HttpHeaders({
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IklOU1RBLldFQiIsInJvbGUiOiJBUFAuWkVSTyIsIkFMIjoiMCIsIm5iZiI6MTY1MjI2NzU0MywiZXhwIjoxNjUyMjg5MTQzLCJpYXQiOjE2NTIyNjc1NDMsImlzcyI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSIsImF1ZCI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSJ9.Y8z_f1G6Mlw_iGLN5SkL90TI_E2VJLI-XOgJI8IPy18'
      })
    }
    return this.http.get(`https://dev.api.syncstream.io/api/customer/${id}`,httpoption)
  }

}


