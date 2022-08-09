import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OffererCService } from 'src/app/service/offerer-c.service';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { Router } from '@angular/router';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
// import { faCoffee,faBookOpenReader,faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
/**
 * This class maintains the route component structure for the ACA Reporting Data Offer of Coverage page
 * @class
 */
@Component({ selector: 'app-aca-reporting-data-offer-of-coverage', templateUrl: './offer-of-coverage.component.html', styleUrls: ['./offer-of-coverage.component.css'] })
export class AcaReportingDataOfferOfCoverageComponent implements OnInit {


  dataSource: MatTableDataSource<any>;
  selection: SelectionModel<any>;

  


  public constructor(public dialog: MatDialog, public offerservice: OffererCService, private router: Router) { 
    this.dataSource = new MatTableDataSource();
    this.selection = new SelectionModel<any>(true, []);

  }
  public ngOnInit(): void {
    this.taxyear = sessionStorage.getItem('CurrentTaxYear')
    this.customerId = localStorage.getItem('dataSource')
    this.getList()
    this.onYearChange()
    if(this.customerId){
      this.getEmployeeData()
    }
    let custName= localStorage.getItem("CurrentCustomerName")
    this.custNamee = custName
  }
  /**
   * This method fires when the route component is initialized
   * @returns {void}
   */
  custNamee:any
  customerId: any;
  employeeId = null;
  employeeList: any = []
  taxyear: any
  planList: any = []
  selectedEmployee: any
  employeeName: any
  employeeHireDate: any
  employeeTerminationDate: any
  planData: any
  planDetail: any
  list: any = []
  compName = "offerofcoverage"
  
  displayedColumns: string[] = [
    'select',
    'remove',
    'edit',
    'employeeid',
    'employeename',
    'ssn',
    'hireDate',
    'terminationDate',
    'planname',
    'planRenewalDate',
    'dateOfOffer',
    'outcomeofoffer',
    'enrollmentDate',
    'disenrollmentDate',
    'dateOfBirth',
  ];

 @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
   
    this.dataSource.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  getList() {
    this.offerservice.createOfc(this.customerId, this.taxyear).subscribe((res: any) => {
      this.list = res
      
      this.dataSource = new MatTableDataSource(this.list);
      this.dataSource.sort = this.sort;
    })
  }

  navigatelist() {
    this.router.navigateByUrl(`/EmployeeDependent?customer_id=${this.customerId}`, 
    { state: 
      { compName: this.compName } 
    })
  }


 
  onYearChange() {
    if (this.taxyear && this.customerId) {
      this.getPlandata()
      this.getList()
    
    }
  }
  getEmployeeData() {
    this.offerservice.getEmployeeData(this.customerId).subscribe((res: any) => {
      this.employeeList = res
      

    })
  }
  getPlandata() {
    this.offerservice.getPlandata(this.customerId, this.taxyear).subscribe(res => {
      this.planList = res
    })
  }


  openDialog1() {
    const dialogRef = this.dialog.open(CreateOfferComponent, {
      data: {
        empName: this.employeeName,
        empHireDate: this.employeeHireDate,
        empTerminationDate: this.employeeTerminationDate,
        planData: this.planData,
        customerId: this.customerId,
        employeeId: this.employeeId
      },
      panelClass: ["custom-style"]
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  getPlan() {
    this.planList.map((item: any) => {
      if (item.p_planName == this.planDetail) {
        this.planData = item
      }
    })
  }
  uploadOffer() {

  }

  getSelectedEmpIdd(ev: any, row: any) {
    if (ev) {
      this.selection.toggle(row);
    }
    this.employeeList = this.selection.selected;
    
  }

  getEmployeeById() {



    this.employeeList.map((item: any) => {
      if (item.employeeId == this.selectedEmployee) {
        this.employeeName = item.employeeName
        this.employeeId = item.employeeId
        this.employeeHireDate = item.employeeCensus[0]?.hireDate ? item.employeeCensus[0]?.hireDate : null
        this.employeeTerminationDate = item.employeeCensus[0]?.terminationDate ? item.employeeCensus[0]?.terminationDate : null

      }
    })
  }
}
