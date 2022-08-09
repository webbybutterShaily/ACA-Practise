import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlanBuildICHRACalculatorComponent } from './plan-build-ichracalculator/plan-build-ichracalculator.component';
import { PlanBuilderformComponent } from './plan-builderform/plan-builderform.component';
import { PlanserviceService } from 'src/app/service/planservice.service';
import { HttpClient } from '@angular/common/http';
import { YearendserviceService } from 'src/app/service/yearendservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';

/**
 * This class maintains the route component structure for the ACA Reporting Data Plan Builder page
 * @class
 */
@Component({
  selector: 'app-aca-reporting-data-plan-builder',
  templateUrl: './plan-builder.component.html',
  styleUrls: ['./plan-builder.component.css'],
})
export class AcaReportingDataPlanBuilderComponent implements OnInit {
  customerId: any;
  /**
   * This method instantiates our route component with injected dependencies
   */

   dataSource: MatTableDataSource<any>;
   selection: SelectionModel<any>;



  public taxYear: any = [];
  planList: any = [];
  plist: any = [];
  allActive: any = [];
  removePlanList: any = [];
  removePlan: any = [];
  a: any;
  public masterSelected = false;
  public isChecked = false;
  public masterChecked = false;
  checkedList: any = [];
  custNamee:any; 
  displayedColumns: string[] = [
    'select',
    'remove',
    'planName',
    'planSponsor',
    'waitingPeriod',
    'planRenewalDate',
   
    'planEndDate',
    'totalPlanCost',
    'monthlyEEContribution',
    'planIsSelfInsured'
  ];

  public constructor(
    public dialog: MatDialog,
    private planService: PlanserviceService,
    private http: HttpClient,
    private yearendservice: YearendserviceService
  ) {
    this.getCheckedItemList();
    this.dataSource = new MatTableDataSource();
    this.selection = new SelectionModel<any>(true, []);
  }

  // /**
  //  * This method fires when the route component is initialized
  //  * @returns {void}
  //  */

  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
   
    this.dataSource.sort = this.sort;
  }



  ngOnInit() {

    let custName= localStorage.getItem("CurrentCustomerName")
    console.log(custName)
    this.custNamee = custName
    this.customerId = localStorage.getItem('dataSource');
    this.GetTaxYear();
    this.http
      .get(
        `https://dev.api.syncstream.io/api/employee-census/${this.customerId}`
      )
      .subscribe((data) => {
        console.log('allEmployee data here.', data);
        Object.entries(data).forEach((item) => {
          console.log('item.employeeStatus', item[1].employeeStatus);
          if (item[1].employeeStatus == 'Active') {
            this.allActive.push(item[1]);
          }
        });
      });
    this.getPlanData();
    

    


  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.planList = this.selection.selected;

      return;
    }

    this.selection.select(...this.dataSource.data);
    this.planList = this.selection.selected;
    console.log(this.planList);
    console.log(this.selection.selected);
  }
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  // checkboxLabel(row?: any): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
  //     row.position + 1
  //   }`;
  // }
  getSelectedEmpIdd(ev: any, row: any) {
    if (ev) {
      this.selection.toggle(row);
    }
    console.log(this.selection.selected);
    this.planList = this.selection.selected;
    
    console.log(this.planList);
  }
  getCustId(element: any) {
    this.customerId = element.customerId;

    this.getPlanData();
  }

  GetTaxYear() {
    const com = this.yearendservice.sharedData$.subscribe(
      (sharedData) => (this.taxYear = sharedData)
    );
  }

  getdata(d: any) {
    console.log('dataa', d);
    if (this.removePlanList.includes(JSON.stringify(d)) == true) {
      console.log('ver');
      const index = this.removePlanList.indexOf(JSON.stringify(d));
      console.log('index', index);
      this.removePlanList.splice(index, 1);
    } else {
      this.removePlanList.push(JSON.stringify(d));
    }

    console.log('check here', this.removePlanList);
  }
  // allSelect(){
  //   this.masterChecked=true
  // }

  getPlanData() {
    this.planService.getdata(this.customerId).subscribe((res: any) => {
      this.planList = res;
      this.dataSource = new MatTableDataSource(this.planList);
      this.dataSource.sort = this.sort;
      // for (var k = 0; k < this.planList.length; k++) {
      //   this.planList[k].isSelectd = false;
      // }

      console.log('remove', res);
    });
  }

  checkUncheckAll() {
    for (var i = 0; i < this.planList.length; i++) {
      this.planList[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }
  // isAllSelected() {
  //   this.masterSelected = this.planList.every(function (item: any) {
  //     return item.isSelected == true;
  //   });
  //   this.getCheckedItemList();
  // }
  getCheckedItemList() {
    this.checkedList = [];
    for (var i = 0; i < this.planList.length; i++) {
      if (this.planList[i].isSelected)
        this.checkedList.push(JSON.stringify(this.planList[i]));
    }
    // this.checkedList = JSON.stringify(this.checkedList);
  }
  openDialog() {
    this.dialog.open(PlanBuilderformComponent, {
      width: '100px',
      panelClass: 'custom-modalbox',
    });
  }

  openDialog1() {
    const dialogRef = this.dialog.open(PlanBuilderformComponent, {
      data: {
        customerId: this.customerId,
      },
      panelClass: ['custom-style'],
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
  openDialog2() {
    const dialogRef = this.dialog.open(PlanBuildICHRACalculatorComponent, {
      data: this.taxYear,
    });

    dialogRef.afterClosed().subscribe((result: any) => {});
  }
  removedata() {
    // this.removePlanList=JSON.parse(this.removePlanList)
    // console.log("checkedlist",this.checkedList)
    // console.log("jsonParse",JSON.parse(this.checkedList[0].customerId))
    // this.a=this.checkedList

    // console.log("plist",this.checkedList)
    for (var i = 0; i < this.checkedList.length; i++) {
      const b = this.checkedList[0];
      // console.log("b",b)
      this.removePlan.push(JSON.parse(this.checkedList[i]));
    }
    // console.log(" this.removePlan", this.removePlan)
    //   for (var i = 0; i < this.checkedList.length; i++) {
    // this.removePlan.push(JSON.parse(this.checkedList[i]))
    //   }

    // for (var i = 0; i < this.removePlanList.length; i++) {

    //   this.http.get('https://dev.api.syncstream.io/api/plan-builder' + '/'+this.removePlanList[i]).subscribe((res: any)=>{
    //     for (var j = 0; i < res.length; j++) {
    //       this.http.delete('https://dev.api.syncstream.io/api/plan-builder'+"/"+res[j].customerId+"/"+res[j].planName+"/"+res[j].planRenewalDate).subscribe((response)=>{
    //         console.log(response)
    //      })

    //     }
    //  })

    // }
    for (var j = 0; j < this.removePlan.length; j++) {
      this.http
        .delete(
          'https://dev.api.syncstream.io/api/plan-builder' +
            '/' +
            this.removePlan[j].customerId +
            '/' +
            this.removePlan[j].planName +
            '/' +
            this.removePlan[j].planRenewalDate
        )
        .subscribe((response) => {
          console.log(response);
        });
    }
  }
  allemployee() {}
}
