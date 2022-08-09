import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCensusService {

  constructor(private http: HttpClient) { }
  GetemployeeDetails(Custoner_id: any) {

    return this.http.get('https://dev.api.syncstream.io/api/employee/employee-census-page-list' + '/' + Custoner_id + '/' + '{filter}')

  }
  getallemployeeDetails(Custoner_id: any) {

    return this.http.get('https://dev.api.syncstream.io/api/employee/employee-census-page-list' + '/' + Custoner_id + '/' + 'All%20Employees')

  }
  Removeemployeecausse(customerID: any, employeeId: any) {

    return this.http.delete('https://dev.api.syncstream.io/api/employee-census' + '/' + customerID + '/' + employeeId)
  }

  // create Employee census page


  createNewEmployee(Data: any) {

    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IklOU1RBLldFQiIsInJvbGUiOiJBUFAuWkVSTyIsIkFMIjoiMCIsIm5iZiI6MTY1MjI2NzU0MywiZXhwIjoxNjUyMjg5MTQzLCJpYXQiOjE2NTIyNjc1NDMsImlzcyI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSIsImF1ZCI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSJ9.Y8z_f1G6Mlw_iGLN5SkL90TI_E2VJLI-XOgJI8IPy18',
      })
    };

    return this.http.post('https://dev.api.syncstream.io/api/employee-census', Data, httpOption)
  }

  Createemployeedetails(Data: any) {

    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IklOU1RBLldFQiIsInJvbGUiOiJBUFAuWkVSTyIsIkFMIjoiMCIsIm5iZiI6MTY1MjI2NzU0MywiZXhwIjoxNjUyMjg5MTQzLCJpYXQiOjE2NTIyNjc1NDMsImlzcyI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSIsImF1ZCI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSJ9.Y8z_f1G6Mlw_iGLN5SkL90TI_E2VJLI-XOgJI8IPy18',
      })
    };

    return this.http.post('https://dev.api.syncstream.io/api/employee', Data, httpOption)
  }

  // List dependent //
  getEmployeeData(customerId: any) {

    return this.http.get('https://dev.api.syncstream.io/api/employee-census' + '/' + customerId)

  }
  DeleteAllCensusRemove(customerID: any) {

    return this.http.delete('https://dev.api.syncstream.io/api/employee-census' + '/' + customerID)

  }
  DeleteAllDepentendDtata(customerID: any) {

    return this.http.delete('https://dev.api.syncstream.io/api/employee-dependent' + '/' + customerID)

  }
  CensusRemove(customerID: any, employeeId: any) {

    return this.http.delete('https://dev.api.syncstream.io/api/employee-census' + '/' + customerID + '/' + employeeId)
  }

  DependentRemove(customerID: any, employeeId: any) {

    return this.http.delete('https://dev.api.syncstream.io/api/employee-dependent' + '/' + customerID + '/' + employeeId)

  }
  getDependent(customerID: any) {

    return this.http.get('https://dev.api.syncstream.io/api/employee-dependent' + '/' + customerID)

  }

  UpdateEmployeeeProfile(Data: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IklOU1RBLkFQUCIsInJvbGUiOiJBUFAuWkVSTyIsIkFMIjoiMCIsIm5iZiI6MTY1MjMyNjU5OSwiZXhwIjoxNjUyMzQ4MTk5LCJpYXQiOjE2NTIzMjY1OTksImlzcyI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSIsImF1ZCI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSJ9.YyGSxcnnGbOIZPywRL-Uq4VpR7JJ8ybKx6bozhcDie8'
      })
    };
    return this.http.put('https://dev.api.syncstream.io/api/employee', Data, httpOption)
  }
  UpdateEmployeeeDetails(Data: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IklOU1RBLkFQUCIsInJvbGUiOiJBUFAuWkVSTyIsIkFMIjoiMCIsIm5iZiI6MTY1MjMyNjU5OSwiZXhwIjoxNjUyMzQ4MTk5LCJpYXQiOjE2NTIzMjY1OTksImlzcyI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSIsImF1ZCI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSJ9.YyGSxcnnGbOIZPywRL-Uq4VpR7JJ8ybKx6bozhcDie8'
      })
    };
    return this.http.put('https://dev.api.syncstream.io/api/employee-census', Data, httpOption)
  }

 
}
