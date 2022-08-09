import { Component, Input, OnInit } from '@angular/core';
import { CustomersSetupService } from 'src/app/service/customers-setup.service';
import { YearendserviceService } from 'src/app/service/yearendservice.service';
declare const myTest1: any;
@Component({
  selector: 'app-year-end-review',
  templateUrl: './year-end-review.component.html',
  styleUrls: ['./year-end-review.component.css']
})
export class YearEndReviewComponent implements OnInit {
  Companyname: any;
  isALE: any;
  employerEIN: any;
  contactName: any;
  addressLine1: any
  cityName: any;
  usState: any;
  usZip: any;
  contactPhone: any;
  contactEmail: any;
  maskSSN: any;
  minValueCoverage: any;
  minEssentialCoverage: any
  mewa: any
  fedPovertySafeHarbor: any
  w2SafeHarbor: any
  rateOfPaySafeHarbor: any
  aleMemberOfControlledGroup: any
  validatedPeriods: any
  verifiedListOfCompaniesForCG: any
  verifiedSelfInsured: any
  public EmployeeInfo: any = [];
  public Alestatus: any = [];
  public controlinfo: any = [];
  public yearlist: any = [];
  public mergearray: any = [];
  public GroupInff: any = [];
  public endyear: any = [];
  todaydate: Date | undefined;
  updatedOn: any;
  public customerId1: any;
  taxyear: any
  uploadedOffers: any
  uploadedCensus: any
  reviewedInformation: any
  uploadedPlanInfo: any
  public customerdetails: any = []
  onselectvalue: any
  public EndcustomerDetails: any = []

  constructor(private yearservice: YearendserviceService, private customerService: CustomersSetupService) { }
  // @Input() taxyear: string | undefined;
  ngOnInit(): void {
    this.GetCoustomerDetails()
    this.gettaxyear();
  }
  onClick() {
    myTest1();
  }

  GetCoustomerDetails() {
    this.todaydate = new Date();
    this.updatedOn = new Date().toLocaleDateString()
    localStorage.removeItem("companyselect")
  }


  saveEmployeeInformation() {
    let EmployeeInff;

    EmployeeInff =
      [{
        customerId: this.customerId1,
        taxYear: this.taxyear,
        businessName: "General Example Sheakley",
        employerEIN: this.employerEIN,
        usState: this.usState,
        usZip: this.usZip,
        contactName: this.contactName,
        contactPhone: this.contactPhone,
        addressLine1: this.addressLine1,
        addressLine2: null,
        contactEmail: this.contactEmail,
        cityName: this.cityName,
        maskSSN: this.maskSSN,

      }]
    this.EmployeeInfo = EmployeeInff;

  }
  SaveAleStatus() {
    let ALEstatus;
    ALEstatus =
      [{
        isALE: this.isALE,
        tr50to99: true,
        tr100Plus: true,
        minValueCoverage: this.minValueCoverage,
        minEssentialCoverage: this.minEssentialCoverage,
        nonCalYearTR: true,
        mewa: this.mewa,
        fedPovertySafeHarbor: this.fedPovertySafeHarbor,
        w2SafeHarbor: this.w2SafeHarbor,
        rateOfPaySafeHarbor: this.rateOfPaySafeHarbor

      }]
    this.Alestatus = ALEstatus
    this.mergearray = this.Alestatus.map((item: any, i: any) => Object.assign({}, item, this.EmployeeInfo[i]));
  }
  SaveControlGroupInff() {
    let ControlGInformation;
    ControlGInformation =
      [{
        aleMemberOfControlledGroup: this.aleMemberOfControlledGroup,
        verifiedListOfCompaniesForCG: this.verifiedListOfCompaniesForCG,
      }]
    this.controlinfo = ControlGInformation
    this.GroupInff = this.controlinfo.map((item: any, i: any) => Object.assign({}, item, this.mergearray[i]));
  }
  Saveyearlist() {
    const checklist =
      [{
        validatedPeriods: true,
        verifiedSelfInsured: this.verifiedSelfInsured,
        uploadedPayrollData: true,
        uploadedPlanInfo: this.uploadedPlanInfo,
        uploadedOffers: this.uploadedOffers,
        uploadedCensus: this.uploadedCensus,
        reviewedInformation: this.reviewedInformation,
        idAsEducationalOrg: false,
        breaksInServiceApplied: true,
        previewGenerated: false,
        enActSent: true,
        printingSelected: false,
        updatedBy: this.contactEmail,
        updatedOn: this.updatedOn,
        notificationEmail: null
      }]

    this.yearlist = checklist;


    this.endyear = this.yearlist.map((item: any, i: any) => Object.assign({}, item, this.GroupInff[i]));

    if (this.EndcustomerDetails.length === 0) {
      this.yearservice
        .Savecseries(this.endyear[0])
        .subscribe((res) => {
          window.location.reload();
        })
    }
    else {
      this.yearservice
        .UpdateCseries(this.endyear[0])
        .subscribe((res) => {
          window.location.reload();
        })
    }
  }


  addCustomerdetails() {

    const data = localStorage.getItem("dataSource")
    this.customerId1 = data

    const select = localStorage.getItem("companyselect")
    this.onselectvalue = select

    const year =sessionStorage.getItem("CurrentTaxYear")
    this.taxyear = year
 

    if (this.taxyear && this.customerId1 !== null) {
      this.yearservice
        .GetyearEndData(this.customerId1, this.taxyear)
        .subscribe((res) => {

          this.EndcustomerDetails = res

          this.employerEIN = this.EndcustomerDetails.employerEIN;
          this.usState = this.EndcustomerDetails.usState;
          this.usZip = this.EndcustomerDetails.usZip;
          this.contactName = this.EndcustomerDetails.contactName;
          this.contactPhone = this.EndcustomerDetails.contactPhone;
          this.addressLine1 = this.EndcustomerDetails.addressLine1;
          this.contactEmail = this.EndcustomerDetails.contactEmail;
          this.cityName = this.EndcustomerDetails.cityName;
          this.maskSSN = this.EndcustomerDetails.maskSSN;

          this.isALE = this.EndcustomerDetails.isALE;
          this.minValueCoverage = this.EndcustomerDetails.minValueCoverage;
          this.minEssentialCoverage = this.EndcustomerDetails.minEssentialCoverage;
          this.mewa = this.EndcustomerDetails.mewa;
          this.fedPovertySafeHarbor = this.EndcustomerDetails.fedPovertySafeHarbor;
          this.w2SafeHarbor = this.EndcustomerDetails.w2SafeHarbor;
          this.rateOfPaySafeHarbor = this.EndcustomerDetails.rateOfPaySafeHarbor;

          this.aleMemberOfControlledGroup = this.EndcustomerDetails.aleMemberOfControlledGroup;
          this.verifiedListOfCompaniesForCG = this.EndcustomerDetails.verifiedListOfCompaniesForCG;

          this.verifiedSelfInsured = this.EndcustomerDetails.verifiedSelfInsured;
          this.uploadedPlanInfo = this.EndcustomerDetails.uploadedPlanInfo,
            this.uploadedOffers = this.EndcustomerDetails.uploadedOffers,
            this.uploadedCensus = this.EndcustomerDetails.uploadedCensus,
            this.reviewedInformation = this.EndcustomerDetails.reviewedInformation;
          this.updatedOn = this.EndcustomerDetails.updatedOn;

        })
    }
    else {
      if (this.onselectvalue !== null) {

        this.yearservice
          .GetCustomers(this.customerId1)
          .subscribe((result) => {

            this.customerdetails = result
            this.Companyname = this.customerdetails.customerName
            this.usState = this.customerdetails.stateCode
            this.employerEIN = this.customerdetails.EIN
            this.usZip = this.customerdetails.zipCode
            this.contactName = this.customerdetails.contactName
            this.contactPhone = this.customerdetails.contactNo
            this.cityName = this.customerdetails.city
            this.addressLine1 = this.customerdetails.addressLine1
            this.contactEmail = this.customerdetails.emailId

          })
      }
    }
  }

  gettaxyear() {
    const com = this.yearservice.sharedData$
      .subscribe(sharedData => this.taxyear = sharedData);
  }
}
