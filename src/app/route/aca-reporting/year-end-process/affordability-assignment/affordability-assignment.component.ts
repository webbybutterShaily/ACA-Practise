import { Component, OnInit } from '@angular/core';
import { CustomersSetupService } from 'src/app/service/customers-setup.service';
import { YearendserviceService } from 'src/app/service/yearendservice.service';
declare const myTest: any;
@Component({
  selector: 'app-affordability-assignment',
  templateUrl: './affordability-assignment.component.html',
  styleUrls: ['./affordability-assignment.component.css']
})
export class AffordabilityAssignmentComponent implements OnInit {

  public companyname: any;
  public Taxyear: any;
  Customerid: any;
  istrueopaysafe:boolean =false
  istruew2safe:boolean =false;
  istruefplsafe:boolean =false;

  constructor(private customerService: CustomersSetupService,
    private yearendservice: YearendserviceService) { }

  ngOnInit(): void {

    const taxyear = sessionStorage.getItem('CurrentTaxYear')
    this.Taxyear = taxyear; 

    const cust_Id = localStorage.getItem('dataSource')
    this.Customerid = cust_Id

    this.getCompanyName();
    this.FplsafeHabor();
    this.RateofPayhabor();
    this.W2safehabor();

  }
  onClick() {
    myTest();
  }
  getCompanyName() {

    const com = this.customerService.sharedData$
      .subscribe(sharedData => this.companyname = sharedData);
  }

  W2safehabor() {
    this.yearendservice.GetW2safeharbor(this.Customerid,this.Taxyear).subscribe((result)=>{
      if(result === false){
        this.istruew2safe = true;
      }      
    })
  }
  
  FplsafeHabor() {
    this.yearendservice.GetFplsafeharbor(this.Customerid,this.Taxyear).subscribe((result)=>{
      if(result === false){
        this.istruefplsafe = true;
      }
    })
  }

  RateofPayhabor() {
    this.yearendservice.GetRateofpaysafeharbor(this.Customerid,this.Taxyear).subscribe((result)=>{
      if(result === false){
        this.istrueopaysafe = true;
      }
    })
  }

}
