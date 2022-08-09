import { Component, OnInit } from '@angular/core';
import { CustomersSetupService } from 'src/app/service/customers-setup.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
/**
 * This class maintains the route component structure for the ACA Tracking setup page
 * @class
 */
@Component({ selector: 'app-aca-tracking-setup', templateUrl: './setup.component.html', styleUrls: ['./setup.component.css'] })
export class AcaTrackingSetupComponent implements OnInit {
  currentDate3 = new Date;
  public customerId: any
  cdate: any
  jshonform: any
  public companyname: any
  isDisabled: any = false
  isDisabled1: any = false
  trackingdata1: any
  tdata1: any
  TrackingData: any

  Usesalaried: boolean = false
  Hourlyselecte1: any = "3"
  currentDate1 = new Date;
  value1 = 0;
  Hourlyselecte2: any = "3"
  HourlyDatea: any = new Date
  Hourlyvalue2: any
  Hourlyselecte3: any = "3"
  startdate: any
  value3 = 0;
  isDisabled3: boolean = false





  /**
   * This method instantiates our route component with injected dependencies
   */
  public constructor(private customerService: CustomersSetupService) { }

  /**
   * This method fires when the route component is initialized
   * @returns {void}
   */
  public ngOnInit(): void {
    this.getCompanyName()
    this.customerService.getNewUserInfo().subscribe(info => {
      this.TrackingData = info
      if (this.TrackingData.isSetupLocked == true) {
        this.Hourlyselecte1 = this.TrackingData.salEmplMeasurementPeriod
        this.currentDate1 = this.TrackingData.salEmplMeasurementStartDate
        this.value1 = this.TrackingData.salEmplAdminPeriod
        this.Hourlyselecte2 = this.TrackingData.hourlyEmplMeasurementPeriod
        this.HourlyDatea = this.TrackingData.hourlyEmplMeasurementPeriodStartDate
        this.Hourlyvalue2 = this.TrackingData.hourlyEmplAdminPeriod
        this.Hourlyselecte3 = this.TrackingData.newHourlyEmplMeasurementPeriod
        this.startdate = this.TrackingData.newHourlyEmplMeasurementPeriodStartDate
        this.value3 = this.TrackingData.newHourlyEmplAdminPeriod
        this.isDisabled3 = true;

      }

    })
  }

  getCompanyName() {
    const com = this.customerService.sharedData$
      .subscribe(sharedData => this.companyname = sharedData);
    const id = this.customerService.customerID$.subscribe(customerID => this.customerId = customerID);
  }
  edit() {
    this.Hourlyselecte2 = this.Hourlyselecte1
    this.HourlyDatea = this.currentDate1
    this.Hourlyvalue2 = this.value1
    this.isDisabled = !this.isDisabled
    this.isDisabled1 = !this.isDisabled1
  }
  edit1() {
    if (this.isDisabled === true) {
      this.isDisabled1 = true;
    } else {
      this.isDisabled1 = !this.isDisabled1
    }
  }

  validateValue1(event: number) {

    if (event > 90) {
      this.value1 = 90;
    } else if (event < 0) {
      this.value1 = 0;
    } else {
      this.value1 = event;
    }
  }
  validateValue2(event: number) {

    if (event > 90) {
      this.Hourlyvalue2 = 90;
    } else if (event < 0) {
      this.Hourlyvalue2 = 0;
    } else {
      this.Hourlyvalue2 = event;
    }
  }
  validateValue3(event: number) {

    if (event > 90) {
      this.value3 = 90;
    } else if (event < 0) {
      this.value3 = 0;
    } else {
      this.value3 = event;
    }
  }
  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  SaveTrackingData() {
    let trakingdata
    trakingdata =
    {
      customerId: this.customerId,
      salEmplMeasurementPeriod: this.Hourlyselecte1,
      salEmplMeasurementStartDate: this.currentDate1.toLocaleDateString(),
      salEmplAdminPeriod: this.value1,
      hourlyEmplMeasurementPeriod: this.Hourlyselecte2,
      hourlyEmplMeasurementPeriodStartDate: this.HourlyDatea.toLocaleDateString(),
      hourlyEmplAdminPeriod: this.Hourlyvalue2,
      newHourlyEmplMeasurementPeriod: this.Hourlyselecte3,
      newHourlyEmplMeasurementPeriodStartDate: this.startdate,
      newHourlyEmplAdminPeriod: this.value3,
      isSetupLocked: true,
      useSalariedSettingsForHourly: this.Usesalaried
    },
      this.customerService
        .saveTrackingDetails(trakingdata)
        .subscribe((response) => {
          this.trackingdata1 = response;
        })
  }
}
