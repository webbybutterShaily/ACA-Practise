import { EmployeeCensusService } from 'src/app/service/employee-census.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomersSetupService } from 'src/app/service/customers-setup.service';

@Component({
  selector: 'app-create-new-employee-dialog',
  templateUrl: './create-new-employee-dialog.component.html',
  styleUrls: ['./create-new-employee-dialog.component.css']
})
export class CreateNewEmployeeDialogComponent implements OnInit {

  hireDate: any;
  effectiveDate: any;
  terminationDate: any;
  employeeStatus: any = 's';
  employeeType: any = 's';
  payType: any = 's';
  addressLine1: any
  addressLine2: any
  city: any;
  StateCode: any;
  ZipCode: any
  homeDepartment: any
  homeLocation: any
  dateOfBirth: any
  employeeEmail: any
  primaryWorksiteZipCode: any
  countyofWorksite: any
  countyofResidence: any
  customerId: any;
  employeeId: any

  SSN: any
  employeeName: any
  firstName: any;
  middleName: any;
  lastName: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private customerService: CustomersSetupService, private census: EmployeeCensusService) {


  }

  ngOnInit(): void {

    this.getEmployeeID();
  }

  getEmployeeID() {
    const data = localStorage.getItem("dataSource")
    this.customerId = data
  }
  SaveEmployeeData() {
    let EmployeeData;

    EmployeeData = {

      customerId: this.customerId,
      employeeId: this.employeeId,
      effectiveDate: this.effectiveDate.toLocaleDateString(),
      hireDate: this.hireDate.toLocaleDateString(),
      terminationDate: this.terminationDate.toLocaleDateString(),
      employeeStatus: this.employeeStatus,
      employeeType: this.employeeType,
      payType: this.payType,
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      city: this.city,
      stateCode: this.StateCode,
      zipCode: this.ZipCode,
      homeDepartment: this.homeDepartment,
      homeLocation: this.homeLocation,
      dateOfBirth: this.dateOfBirth.toLocaleDateString(),
      employeeEmail: this.employeeEmail,
      miscellaneous: "Loreon Epsom.",
      isElectronicallyConsented: true,
      primaryWorksiteZipCode: this.primaryWorksiteZipCode,
      countyofWorksite: this.countyofWorksite,
      countyofResidence: this.countyofResidence,
    }
    let Employeedetails: any;
    Employeedetails = {
      customerId: this.customerId,
      employeeId: this.employeeId,
      SSN: this.SSN,
      employeeName: this.employeeName,
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName
    }
    this.census
      .Createemployeedetails(Employeedetails)
      .subscribe((res) => {

      })
    this.census
      .createNewEmployee(EmployeeData)
      .subscribe((response) => {
        this.employeeId = '';
        this.effectiveDate = '';
        this.hireDate = '';
        this.terminationDate = '';
        this.employeeStatus = '';
        this.employeeType = '';
        this.payType = '';
        this.addressLine1 = '';
        this.addressLine2 = '';
        this.city = '';
        this.StateCode = '';
        this.ZipCode = '';
        this.homeDepartment = '';
        this.homeLocation = '';
        this.dateOfBirth = '';
        this.employeeEmail = '';
        this.primaryWorksiteZipCode = '';
        this.countyofWorksite = ''
        this.countyofResidence = '';
      })
  }

}
