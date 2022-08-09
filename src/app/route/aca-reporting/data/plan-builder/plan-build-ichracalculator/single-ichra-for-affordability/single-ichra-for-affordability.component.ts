import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomersSetupService } from 'src/app/service/customers-setup.service';

@Component({
  selector: 'app-single-ichra-for-affordability',
  templateUrl: './single-ichra-for-affordability.component.html',
  styleUrls: ['./single-ichra-for-affordability.component.css']
})
export class SingleIchraForAffordabilityComponent implements OnInit {
  SelectedSTateCode: any
  SelectedCountry: any
  dropdownlist: any
  dropdownlist1: any
  isLoading: boolean = true
  isLoading1: boolean = true


  calculaterValue: any
  silverPlanCost: any
  costOnW2ROP: any
  costOnFPL: any
  ZipCode: any
  planStartDate: any
  EmpAge: any
  ratHourlyOrSalary: any
  isHourly: any = true
  public Taxyear: any
  public taxYear:any
  HourlyOrSalary: any
  error: any;
  array1 = ['0-14', '15', '16', '17', '18', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36',
    '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '56', '57', '58', '59', '60', '61', '62', '63', '64']

  constructor(public dialog: MatDialog, private http: HttpClient,@Inject(MAT_DIALOG_DATA) public data: string,
    public customerService: CustomersSetupService) { }

  ngOnInit(): void {
    this.statecode();
    console.log(this.data);
    this.Taxyear=this.data
    
  }
  statecode() {
    this.http
      .get<any>(
        `https://dev.api.syncstream.io/api/ichra-pylookup/get-all-states`
      )
      .subscribe((res) => {
        this.isLoading = false;
        this.dropdownlist = res;
        res.map(function (o: any) {
        })
      });
  }
  countryname() {
    this.dropdownlist1 = []

    this.http
      .get<any>(
        `https://dev.api.syncstream.io/api/ichra-pylookup/get-all-counties-by-stateCode/${this.SelectedSTateCode}`
      )
      .subscribe((data) => {
        this.isLoading1 = false;
        this.dropdownlist1 = data
      });



  }
  onOptionsSelected(event: any) {
    this.countryname()
  }
  IcharCalculate() {
    this.calculaterValue = []
    this.http.get<any>(
      `https://dev.api.syncstream.io/api/ichra-pylookup/get-ichra-affordability-calculation/${this.SelectedSTateCode}/${this.SelectedCountry}/${this.taxYear}/${this.ZipCode}/${this.EmpAge}/${this.HourlyOrSalary}/${this.ratHourlyOrSalary}`
      ).subscribe((data) => {
      this.calculaterValue = data
      this.silverPlanCost = this.calculaterValue.silverPlanCost
      this.costOnW2ROP = this.calculaterValue.costOnW2ROP
      this.costOnFPL = this.calculaterValue.costOnFPL
    }, error => {
      this.error = error.error.message;
      console.log("this.error",this.error.error.message);
      
      // this.loading = false;
    });
  }
}
