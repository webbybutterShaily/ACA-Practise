import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-add-establishment',
  templateUrl: './customer-add-establishment.component.html',
  styleUrls: ['./customer-add-establishment.component.css']
})
export class CustomerAddEstablishmentComponent implements OnInit {



  brand = [
    "ABC",
    "XYZ"
  ]

  licenseType = [
    "Enterprise-Employer",
    "Enterprise- Service Provider",
    "Multi-company Child Company",
    "Multi-company Parent Company",
    "Single Company"
  ]

  group = [
    "N/A",
    "Consolidated Group",
    "Controlled Group"
  ]

  opt = [
    "N/A",
    "Yes",
    "No"
  ]
  currentDate1 = new Date;

  establishments = [
    "UAT-100-1",
    "UAT-100-2",
    "UAT-100-3",
    "UAT-100-4",
    "UAT-100-5",
  ]

  adminlicese = [
    "None",
    "Internal",
    "External"
  ]

  Customer_id: any;
  public CompanyName: any;

  EIN: any;
  IsActive: boolean = false;
  Eeoc_start_Date = new Date().toLocaleDateString()
  // Eeoc_start_Date: any
  EEoc_End_date: any;
  legalName: any;
  Addressline1: any
  Addressline2: any;
  city: any;
  phone: any;
  state: any;
  contact: any;
  zipcode: any;
  Emailadd: any;

  brandname: any;
  Customertype: any;
  Licensetype: any;
  Gouptype: any;
  selfinused: any;
  conntrolparent: any;
  parentCustomer: any;
  retailpartner: any;

  note: any;
  lowestPlanContribution: any;
  waitingPeriodDays: any;
  autoLockSetup: any;
  rateIsW2Wages: any
  showEmpldInLists: any;
  monthlyMeasurement: any;
  isDemoCustomer: any;
  isSchool: any;
  productType: any
  benAdminType: any

  constructor(
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.GetCompanyName();
  }

  GetCompanyName() {
    console.log("this.data", this.data);
    this.EIN = this.data.Ein;
    this.IsActive = this.data.isavtive;
    console.log(this.IsActive);


    const Cust_id = localStorage.getItem('dataSource');
    this.Customer_id = Cust_id;
    this.http
      .get<any>(`https://dev.api.syncstream.io/api/customer/get-new-child-establishment-name/${this.Customer_id}`)
      .subscribe((res) => {
        this.CompanyName = res
      })

  }

  SaveEstablishmentDetailss() {
    const Details = {
      customerId: 15303,
      customerName: this.CompanyName,
      EIN: this.EIN,
      addressLine1: this.Addressline1,
      addressLine2: this.Addressline2,
      city: this.city,
      stateCode: this.state,
      zipCode: this.zipcode,
      contactNo: this.phone,
      contactName: this.contact,

      emailId: this.Emailadd,
      isActive: this.IsActive,
      activatedOn: this.datePipe.transform(new Date(), "yyyy-MM-dd"),
      activatedBy: this.Emailadd,
      inactivatedOn: "2022-07-28",
      inactivatedBy: this.Emailadd,
      Notes: "string",
      exchangesSent: false,
      exchangesSentOn: "2019-12-13",
      lowestPlanContribution: this.lowestPlanContribution,
      waitingPeriodDays: Number(this.waitingPeriodDays),
      brandName: this.brandname,
      parentCompanyId: 0,
      dashboardCustomerType: "Open",
      licenseType: this.Licensetype,

      subscriptionStarted: this.datePipe.transform(new Date(), "yyyy-MM-dd"),
      subscriptionEnds: this.EEoc_End_date,
      licensedNumberOfEmployees: 10,
      autoLockSetup: this.autoLockSetup,
      isControlGroupParent: this.conntrolparent,
      hideAffordabilitySection: false,
      isSelfInsured: this.selfinused,
      isSchool: this.isSchool,
      rateIsW2Wages: this.rateIsW2Wages,
      legalName: this.legalName,
      showEmpldInLists: this.showEmpldInLists,
      benAdminType: this.benAdminType,
      showMaxHoursFT: true,
      monthlyMeasurement: this.monthlyMeasurement,
      isDemoCustomer: this.isDemoCustomer,
      REOnly: false,
      groupType: this.Gouptype,

      retailPartner: this.retailpartner,
      productType: 8,
      eeocParentEstablishment: 0,
      county: "Fairfax",
      tempAccessStatus: false,
      billingNote: this.note,
      billingPurposeflag: true,
      clientID: 0,
      isStaffingCompany: false
    }
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IklOU1RBLldFQiIsInJvbGUiOiJBUFAuWkVSTyIsIkFMIjoiMCIsIm5iZiI6MTY1MjI2NzU0MywiZXhwIjoxNjUyMjg5MTQzLCJpYXQiOjE2NTIyNjc1NDMsImlzcyI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSIsImF1ZCI6Imh0dHBzOi8vYXBwaWRlbnRpdHkuaW5zdGFjaXRpLmNvbSJ9.Y8z_f1G6Mlw_iGLN5SkL90TI_E2VJLI-XOgJI8IPy18',
      })
    };
    this.http.post<any>("https://dev.api.syncstream.io/api/customer", Details, httpOption).subscribe((res) => {
    window.location.reload();

    })

    
  }
}
