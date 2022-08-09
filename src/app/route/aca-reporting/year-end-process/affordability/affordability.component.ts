import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, Chart } from 'chart.js';
import { YearendserviceService } from 'src/app/service/yearendservice.service';
import { faTableList } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

// import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-affordability',
  templateUrl: './affordability.component.html',
  styleUrls: ['./affordability.component.css'],
})
export class AffordabilityComponent implements OnInit {
  custname: any;
  showPie: boolean = true;
  value = 'No Data Available';
  colors: any;
  customerId: any;
  taxYear: any;
  donut: any = [];
  donutRateOfPay: any = [];
  donutFPl: any = [];
  percentage: any = [];
  cId: any;
  tYear: any;
  countt: any;
  descriptionn: any;
  countArray: any = [];
  compName = 'affordability';
  chart: any;
  chart2: any;
  chart3: any;

  constructor(
    private yearendService: YearendserviceService,
    private router: Router
  ) {}

  faTable = faTableList;
  faPen = faPen;

  ngOnInit(): void {
    let custnamee = localStorage.getItem('CurrentCustomerName');
    this.custname = custnamee;
    let CustId = localStorage.getItem('dataSource');
    this.cId = CustId;
    let tYear = sessionStorage.getItem('CurrentTaxYear');
    this.taxYear = tYear;

    this.getDvalue();
    this.getDRateOfPayvalue();
    this.getDFPLValue();
  }

  getchart1() {
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['Passed Safe Harbor', 'Failed Safe Harbor'],
        datasets: [
          {
            data: this.doughnutDataW2,
            backgroundColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
            hoverBackgroundColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
            borderColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
            hoverBorderColor: ['rgb(14, 107, 213,65%)', 'rgb(242, 34, 34,65%)'],
            spacing: 4,
            hoverBorderWidth: 5,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        cutout: 90,
        radius: 100,
      },
    });
  }
  getchart2() {
    this.chart2 = new Chart('canvas2', {
      type: 'doughnut',
      data: {
        labels: ['Passed Safe Harbor', 'Failed Safe Harbor'],
        datasets: [
          {
            
            data: this.doughnutDataRateOfPay,
            backgroundColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
            hoverBackgroundColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
            borderColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
            hoverBorderColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip:{
            callbacks:{
              
            }
          }
        },
        responsive: true,
        cutout: 90,
        radius: 100,
      },
    });
  }
  getchart3() {
    this.chart3 = new Chart('canvas3', {
      type: 'doughnut',
      data: {
        labels: ['Passed Safe Harbor', 'Failed Safe Harbor'],
        datasets: [
          {
            data: this.doughnutDataFPL,
            backgroundColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
            hoverBackgroundColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
            borderColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
            hoverBorderColor: ['rgb(14, 107, 213)', 'rgb(242, 34, 34)'],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        cutout: 90,
        radius: 100,
      },
    });
  }

  navigatew2safe() {
    this.router.navigateByUrl(`/w2safe?customer_id=${this.cId}`, {
      state: { compName: this.compName },
    });
  }
  updatew2safe() {
    this.router.navigateByUrl(`/updatew2safe?customer_id=${this.cId}`);
  }
  updateropsafe() {
    this.router.navigateByUrl(`/updateropsafe?customer_id=${this.cId}`);
  }
  navigateRop() {
    this.router.navigateByUrl(`/ropsafe?customer_id=${this.customerId}`, {
      state: { compName: this.compName },
    });
  }
  navigateFpl() {
    this.router.navigateByUrl(`/fplsafe?customer_id=${this.customerId}`, {
      state: { compName: this.compName },
    });
  }

  doughnutDataW2: any = [];
  doughnutDataRateOfPay: any = [];
  doughnutDataFPL: any = [];

  // getting data from api for doughnut chart


  // w2Safe
  getDvalue() {
    this.yearendService
      .getDoughnutValue(this.cId, this.taxYear)
      .subscribe((res) => {
        this.donut = res;

        this.donut.map((item: any) => {
          this.countArray.push(item.count);
        });
        console.log("w2safe",this.doughnutDataW2);
        this.doughnutDataW2 = this.countArray;
        this.getchart1();
      });
  }

  // Rate of Pay 
  getDRateOfPayvalue() {
    this.yearendService
      .getDoughnutValueRateOfPay(this.cId, this.taxYear)
      .subscribe((res) => {
        this.donutRateOfPay = res;
        let cntarr: any = [];
        // console.log(this.donut)
        this.donutRateOfPay.map((item: any) => {
          cntarr.push(item.count);
        });
        console.log(" ROP",cntarr[0]);
        this.doughnutDataRateOfPay = cntarr;
        this.getchart2();
      });
  }

// FPL
  getDFPLValue() {
    this.yearendService
      .getDoughnutValueFPLSafe(this.cId, this.taxYear)
      .subscribe((res) => {
        this.donutFPl = res;
        let cntarr: any = [];
        // console.log(this.donut)
        this.donutFPl.map((item: any) => {
          cntarr.push(item.count);
        });
        console.log("DFPL",cntarr);
        this.doughnutDataFPL = cntarr;
        this.getchart3();
      });
  }
}
function rgba(_arg0: number, _arg1: number, _arg2: number, _arg3: number) {
  throw new Error('Function not implemented.');
}
