import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { OffererCService } from 'src/app/service/offerer-c.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateOfferComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public offerservice:OffererCService,private http: HttpClient) { }

  planDetails:any
  // minDate:any='01/01/2020'
  maxDate ='2020-01-01'
  md=this.maxDate.replace(/\//g, "-")
 request : any={
  planName:"",
  planRenewalDate:"",
  highestLevelOfCoverageOffered:0,
  lowestCostEEContributionForSelfOnlyCoverage:0,
  customerId:"",
  employeeId:""
 }
 
  
  ngOnInit(): void {
    // this.minDate = moment(this.data.planData.planEndDate, 'DD/MM/YYYY')
    this.planDetails = this.data.planData
    
  }
  saveoffer(dataa:any){
  this.request.planName=this.data.planData.p_planName
  this.request.planRenewalDate=this.data.planData.planRenewalDate
  this.request.highestLevelOfCoverageOffered=0
  this.request.lowestCostEEContributionForSelfOnlyCoverage=0
  this.request.customerId=this.data.customerId
  this.request.employeeId=this.data.employeeId
  var event1 = new Date(dataa.dateOfOffer);
  let dateOfOffer =event1.toLocaleDateString().slice(0,10);
  var event2 = new Date(dataa.enrollmentDate);
  let enrollmentDate =event2.toLocaleDateString().slice(0,10);
  var event3 = new Date(dataa.disenrollmentDate);
  let disenrollmentDate =event3.toLocaleDateString().slice(0,10);
  this.request.dateOfOffer=dateOfOffer
  this.request.enrollmentDate=enrollmentDate
  this.request.disenrollmentDate=disenrollmentDate
  this.request.outcomeOfOffer=dataa.outcomeOfOffer
  
    this.http.post('https://dev.api.syncstream.io/api/employee-coverage-offers',this.request).subscribe((res)=>{
      })  
  }
 
}
