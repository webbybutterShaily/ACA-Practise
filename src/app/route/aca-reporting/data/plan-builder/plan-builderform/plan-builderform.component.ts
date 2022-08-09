import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { integer } from 'aws-sdk/clients/cloudfront';
// import * as moment from 'moment';
import { PlanserviceService } from 'src/app/service/planservice.service';
@Component({
  selector: 'app-plan-builderform',
  templateUrl: './plan-builderform.component.html',
  styleUrls: ['./plan-builderform.component.css']
})
export class PlanBuilderformComponent implements OnInit {
  public selectedvalue: string = 'A'
  currentDate1: any
  contributionValue: any
  currentDate: any;
  fromYear: any;
  fromMonth: any;
  setto: integer = 0
  toYear: any;
  toMonth: any;
  months: any = [];
  visible: any = false

  newPlan: any
  planSponser: any;
  waitp: any
  textarea: any;
  money: any;
  selectedvalue1: any;
  selectedvalue2: any;
  zippy: any;
  cpsponser: any;
  select: any;
  select1: any;
  select2: any;
  waitselect: any;
  waitcal: any;
  empselect: any
  last: any;
  customerId:any;
  contributionMo1: any = '0';

  contributionMo2: any = '0';

  contributionMo3: any = '0';

  contributionMo4: any = '0';

  contributionMo5: any = '0';

  contributionMo6: any = '0';

  contributionMo7: any = '0';

  contributionMo8: any = '0';

  contributionMo9: any = '0';

  contributionMo10: any = '0';

  contributionMo11: any = '0';

  contributionMo12: any = '0';

  storeMonthlyContribution: any = []

  public n: any;
  monthsname: any = { 0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "Jun", 6: "Jul", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec" };
  constructor(public planService: PlanserviceService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    console.log("start", this.currentDate1)
    console.log("end", this.currentDate)
    // console.log("end", this.data.customerId)
    this.customerId= localStorage.getItem("dataSource")
  }
  fun(data: any) {
    console.log(data)
    console.log("any")
  }
  funs() {
    console.log("any")
    console.log("currentDate", this.currentDate)
    console.log("month", this.currentDate.getMonth() + 1)
  }
  funs1(data: any, data1: any) {
    this.months = []
    this.fromYear = data.getFullYear();
    this.fromMonth = data.getMonth();
    this.toYear = data1.getFullYear()
    this.toMonth = data1.getMonth();
    console.log("s", data)
    console.log("m", data1)
    console.log("p", this.fromYear)
    // console.log("currentDate",this.currentDate)
    // console.log("currentDate1",this.currentDate1)
    for (let year = this.fromYear; year <= this.toYear; year++) {
      let month = year === this.fromYear ? this.fromMonth : 0;
      console.log("mo", month)
      const monthLimit = year === this.toYear ? this.toMonth : 11;
      for (; month <= monthLimit; month++) {

        this.months.push(this.monthsname[month])
      }
    }
    this.months.pop();

  }
  funs2(data2: any) {

    console.log("data2", data2)
    console.log("visible", this.visible)
    if (data2 >= 0) {
      this.visible = false
      console.log("entered")
    }
  }

  onFocusOutEvent(data2: any) {
    console.log("contvlaue", this.contributionValue)
    console.log("Focus Changed")

    this.contributionValue = "0"

    if (data2 > 0) {
      this.visible = true
      this.contributionValue = 0
    }

  }
  onFocusEvent(data2: any) {
    if (data2 > 0) {
      this.visible = true

    }
  }
  showmonth(months: any, contributionValue: any) {
    console.log(months, contributionValue)
  }

  getMonthlyValues(data: any) {
    this.storeMonthlyContribution.push(data)
    this.storeMonthData()
  }

  storeMonthData(){

    this.storeMonthlyContribution.map((item: any) => {
      console.log(item)
      switch (item.month) {
        case '1':
          this.contributionMo1 = item.value;
          break;
        case '2':
          this.contributionMo2 = item.value;
          break;
        case '3':
          this.contributionMo3 = item.value;
          break;
        case '4':
          this.contributionMo4 = item.value;
          break;
        case '5':
          this.contributionMo5 = item.value;
          break;
        case '6':
          this.contributionMo6 = item.value;
          break;
        case '7':
          this.contributionMo7 = item.value;
          
          break;
        case '8':
          this.contributionMo8 = item.value;
          break;
        case '9':
          this.contributionMo9 = item.value;
          break;
        case '10':
          this.contributionMo10 = item.value;
          break;
        case '11':
          this.contributionMo11 = item.value;
          break;
        case '12':
          this.contributionMo12 = item.value;
          break;
      }
    })
  }
  show() {
    const request: any =
    {
      customerId: this.customerId,
      planName: this.newPlan,

      planSponsor: this.planSponser,

      qualifyForTransitionRelief: true,

      waitingPeriodType: this.waitselect,

      waitingPeriod: this.waitp,

      waitingPeriodEndsOnFollowingCalMonth: this.waitcal,

      eligibilityRequirements: this.textarea,

      planRenewalDate: this.currentDate,

      planEndDate: this.currentDate1,

      totalPlanCost: this.money,

      monthlyEEContribution: this.n,

      contributionMo1: String(this.contributionMo1),

      contributionMo2: String(this.contributionMo2),

      contributionMo3: String(this.contributionMo3),

      contributionMo4: String(this.contributionMo4),

      contributionMo5: String(this.contributionMo5),

      contributionMo6: String(this.contributionMo6),

      contributionMo7: String(this.contributionMo7),

      contributionMo8: String(this.contributionMo8),

      contributionMo9: String(this.contributionMo9),

      contributionMo10: String(this.contributionMo10),

      contributionMo11: String(this.contributionMo11),

      contributionMo12: String(this.contributionMo12),

      firstMonth: 1,

      meetsMinCoverageRequirements: this.select,

      meetsMinValueRequirements: this.select1,

      planIsSelfInsured: true,

      isICHRA: this.selectedvalue,
      //  --- If this value is false then below values should be NULL or False or 0. 

      isICHRAResidenceZipcode: this.selectedvalue1,

      isICHRAWorkSiteZipcode: this.selectedvalue2,

      ICHRAZipcode: this.zippy,

      ICHRAState: "LA",

      ICHRACounty: "Alaska",

      ageatStartOfPlan: "20"

    }


    this.planService.createplan(request).subscribe(res => {
      console.log(res)
    })
  }





}
