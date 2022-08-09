import { Component, Input, OnInit } from '@angular/core';
import { CustomersSetupService } from 'src/app/service/customers-setup.service';
import { YearendserviceService } from 'src/app/service/yearendservice.service';

/**
 * This class maintains the route component structure for the ACA Reporting Year-End Process page
 * @class
 */
@Component({ selector: 'app-aca-reporting-year-end-process', templateUrl: './year-end-process.component.html', styleUrls: ['./year-end-process.component.css'] })
export class AcaReportingYearEndProcessComponent implements OnInit {
  
  /**
   * This method instantiates our route component with injected dependencies
   */
   taxyear:any
   public customerId1:any
   custname:any 

  public constructor( private yearservice:YearendserviceService,private customerService:CustomersSetupService) { }

  /**
   * This method fires when the route component is initialized
   * @returns {void}
   */
 public ngOnInit(): void { 
 
  }
  onItemSelect(){
    this.yearservice.setData(this.taxyear);
   }
  
}
