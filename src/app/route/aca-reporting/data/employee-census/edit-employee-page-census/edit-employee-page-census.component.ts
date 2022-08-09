import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomersSetupService } from 'src/app/service/customers-setup.service';
import { EmployeeCensusService } from 'src/app/service/employee-census.service';

@Component({
  selector: 'app-edit-employee-page-census',
  templateUrl: './edit-employee-page-census.component.html',
  styleUrls: ['./edit-employee-page-census.component.css']
})
export class EditEmployeePageCensusComponent implements OnInit {

  hireDate = new Date();
  effectiveDate = new Date();
  terminationDate = new Date();
  employeeStatus: any = 's';
  employeeType: any = 's';
  payType: any = 's';
  addressLine1: any
  addressLine2: any
  city: any;
  StateCode: any;
  ZipCode: any;
  homeDepartment: any;
  homeLocation: any;
  dateOfBirth: any = new Date();
  employeeEmail: any;
  primaryWorksiteZipCode: any;
  countyofWorksite: any;
  countyofResidence: any;
  customerId: any;
  employeeId: any;
  EmployeeData: any;
  SSN: any;
  employeeName: any;
  firstName: any;
  middleName: any;
  lastName: any;
  details: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private customerService: CustomersSetupService,
    private census: EmployeeCensusService,
    private datePipe: DatePipe) {


    const results = this.data.Emp_data.filter((x: { employeeid: any; }) => x.employeeid === this.data.Employee_id)
    this.details = results;
    this.saveformdata();



  }

  ngOnInit(): void {

    this.getEmployeeID();

  }

  saveformdata() {

    this.hireDate = this.details[0].hireDate;
    this.effectiveDate = this.details[0].effectiveDate;
    this.terminationDate = this.details[0].terminationDate;
    this.employeeType = this.details[0].employeetype;
    this.payType = this.details[0].paytype;
    this.addressLine1 = this.details[0].addressline1
    this.addressLine2 = this.details[0].addressline2
    this.city = this.details[0].city;
    this.StateCode = this.details[0].statecode;
    this.ZipCode = this.details[0].zipcode
    this.homeDepartment = this.details[0].homedepartment
    this.homeLocation = this.details[0].homelocation
    this.dateOfBirth = this.details[0].dateOfBirth
    this.employeeEmail = this.details[0].employeeemail
    this.primaryWorksiteZipCode = this.details[0].primaryworksitezipcode
    this.countyofWorksite = this.details[0].countyofworksite
    this.countyofResidence = this.details[0].countyofresidence
    this.employeeId = this.details[0].employeeid
    this.employeeStatus = this.details[0].employeestatus
    this.SSN = this.details[0].ssn
    this.employeeName = this.details[0].employeename
    this.firstName = this.details[0].firstname;
    this.middleName = this.details[0].middlename;
    this.lastName = this.details[0].lastname;

  }
  getEmployeeID() {
    const data = localStorage.getItem("dataSource")
    this.customerId = data

  }
  UpdateEmployeeData() {

    const efdate = this.datePipe.transform(this.effectiveDate, "yyyy-MM-dd")
    const hireDate1 = this.datePipe.transform(this.effectiveDate, "yyyy-MM-dd")
    const terminatedDate1 = this.datePipe.transform(this.effectiveDate, "yyyy-MM-dd")
    const dob = this.datePipe.transform(this.effectiveDate, "yyyy-MM-dd")
    this.EmployeeData = {

      customerId: Number(this.customerId),
      employeeId: this.employeeId,
      effectiveDate: efdate,
      hireDate: hireDate1,
      terminationDate: terminatedDate1,
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
      dateOfBirth: dob,
      employeeEmail: this.employeeEmail,
      miscellaneous: "Loreon Epsom..",
      isElectronicallyConsented: true,
      primaryWorksiteZipCode: this.primaryWorksiteZipCode,
      countyofWorksite: this.countyofWorksite,
      countyofResidence: this.countyofResidence,
    }
    let Employeedetails: any;
    Employeedetails = {
      customerId: Number(this.customerId),
      employeeId: this.employeeId,
      SSN: this.SSN,
      employeeName: this.employeeName,
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName
    }
    this.census
      .UpdateEmployeeeDetails(this.EmployeeData)
      .subscribe((res) => {
      })
    this.census
      .UpdateEmployeeeProfile(Employeedetails)
      .subscribe((res) => {
      })
  }

}
