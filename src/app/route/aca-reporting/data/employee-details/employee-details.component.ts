import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { EmployeDetailsService } from 'src/app/service/employe-details.service';
export interface PeriodicElement {
  planName: any;
  Status: any;
  offers: any;
  enrollmentDate: any
}
/**
 * This class maintains the route component structure for the ACA Reporting Data Employee Details page
 * @class
 */
@Component({ selector: 'app-aca-reporting-data-employee-details', templateUrl: './employee-details.component.html', styleUrls: ['./employee-details.component.css'] })
export class AcaReportingDataEmployeeDetailsComponent implements OnInit {

  /**
   * This method instantiates our route component with injected dependencies
   */

  customerId: any;
  EmployeeDetails: any = [];
  selectedItems: any = [];
  dropdownSettings = {};
  employeeid: any;
  firstSelect: any
  EMPid: any;
  employeeName: any;
  SSN: any;
  addressLine1: any;
  addressLine2: any;
  hireDate: any;
  terminationDate: any;
  employeeType: any;

  profileDetails: any = [];
  curentoffer: any = [];
  dataSource: any
  istrue: boolean = false;

  selected:any

  public constructor(
    private employeeservice: EmployeDetailsService
  ) {
    const data = localStorage.getItem("dataSource")
    this.customerId = data
  }

  displayedColumns: any[] = ['planName', 'Status', 'offers', 'enrollmentDate',];

  /**
   * This method fires when the route component is initialized
   * @returns {void}
   */
  public ngOnInit(): void {

    this.GetEmployeeDropDrowunDetails();

    this.dropdownSettings = {
      singleSelection: true,
      idField: 'employeeid',
      textField: 'employeename',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    setTimeout(() => {

      this.get()
    }, 500);
  }
  
  get() {
    this.selectedItems.push(this.firstSelect[0])
  }


  filteredList5:any=[]


  GetEmployeeDropDrowunDetails() {
    this.employeeservice.getEmployeeDetails(this.customerId).subscribe((result) => {
      this.EmployeeDetails = result
      this.filteredList5 = this.EmployeeDetails.slice();
      this.firstSelect = this.EmployeeDetails
    })
  }




  onItemSelect(item: any) {
    
    this.employeeservice.GetEmpProfileDetails(this.customerId, item.employeeid).subscribe((result) => {
      this.profileDetails = result
      this.EMPid = this.profileDetails.employeeId;
      this.employeeName = this.profileDetails.employeeName;
      this.SSN = this.profileDetails.SSN;
      this.addressLine1 = this.profileDetails.employeeCensus[0].addressLine1;
      this.addressLine2 = this.profileDetails.employeeCensus[0].addressLine2;
      this.hireDate = this.profileDetails.employeeCensus[0].hireDate;
      this.terminationDate = this.profileDetails.employeeCensus[0].terminationDate;
      this.employeeType = this.profileDetails.employeeCensus[0].employeeType;
    })

    this.employeeservice.GetCurrentOffer(this.customerId, item.employeeid).subscribe((result) => {
      this.curentoffer = result
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.curentoffer);
    })
  }
}
