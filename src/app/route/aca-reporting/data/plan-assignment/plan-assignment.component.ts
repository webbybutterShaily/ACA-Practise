import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { PlanserviceService } from 'src/app/service/planservice.service';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';


import {
  CheckboxControlValueAccessor,
  CheckboxRequiredValidator,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AcaReportingConfirmEmployeeDialogComponent } from './confirm-employee-dialog/confirm-employee-dialog.component';
import { ReConfirmPlanComponent } from './remove-ConfirmPlan/re-confirm-plan/re-confirm-plan.component';
import { ErrorModalComponent } from './Error-modal/error-modal/error-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';

/**
 * This class maintains the route component structure for the ACA Reporting Data Plan Assignment page
 * @class
 */
@Component({
  selector: 'app-aca-reporting-data-plan-assignment',
  templateUrl: './plan-assignment.component.html',
  styleUrls: ['./plan-assignment.component.css'],
})
export class AcaReportingDataPlanAssignmentComponent
  implements OnInit, AfterViewInit
{
  /**
   * This method instantiates our route component with injected dependencies
   */
  dataSource: MatTableDataSource<any>;
  planDataSource: MatTableDataSource<any>;
  selection: SelectionModel<any>;
  planSelection: SelectionModel<any>;
  // paginator: MatPaginator | null = new MatPaginator;
  // selection = new SelectionModel<PeriodicElement>(true, []);
  public constructor(
    public dialog: MatDialog,
    public planService: PlanserviceService,
    private http: HttpClient,
    private route: Router,
    private _liveAnnouncer: LiveAnnouncer
  ) {
    this.dataSource = new MatTableDataSource();
    this.planDataSource = new MatTableDataSource();
    this.selection = new SelectionModel<any>(true, []);
    this.planSelection = new SelectionModel<any>(true, []);
  }

  /**
   * This method fires when the route component is initialized
   * @returns {void}
   */
   custNamee:any
   default:any =[]
  planList: any = [];
  dropdownlist: any;
  customerId: any;
  customerName: any;
  taxYear: any = [];
  allActive: any = [];
  totaldata: any;
  page: any = 1;
  selectedEmpList: any = [];
  planDetail: any;
  dataList: any = [];
  toggleEmpIdFilter: boolean = false;
  toggleEmpNameFilter: boolean = false;
  toggleEmpHireDateFilter: boolean = false;
  toggleEmpTermDateFilter: boolean = false;
  toggleEmpStatusFilter: boolean = false;
  toggleEmpTypeFilter: boolean = false;
  toggleEmpfullTimeStatusFilter: boolean = false;
  toggleEmpPayTypeFilter: boolean = false;
  toggleEmphomeDeptFilter: boolean = false;
  toggleEmphomeLocationFilter: boolean = false;
  toggleEmpDOBFilter: boolean = false;
  displayedColumns: string[] = [
    'select',
    'employeeid',
    'employeename',
    'hireDate',
    'terminationDate',
    'employeestatus',
    'employeetype',
    'FullTimeStatus',
    'paytype',
    'homedepartment',
    'homelocation',
    'dateOfBirth',
  ];

  displayedPlanColumns: string[] = [
    'select',
    'planName',
    'planSponsor',
    'planRenewalDate',
    'planEndDate'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('e_page') epaginator!: MatPaginator;
  // paginator!: MatPaginator;

  @ViewChild('planTbSort') planSort!: MatSort;
  @ViewChild('empTbSort') sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.epaginator;
    this.planDataSource.sort = this.planSort;
    this.planDataSource.paginator = this.paginator;
    let custName= localStorage.getItem("CurrentCustomerName")
    this.custNamee = custName
  }

  
  getCustId(element: any) {
    this.customerId = element.customerid;
    // this.customerName=element.customerName;
    // this.getPlanData();
    // this.allActive=[]
    
  }
  getPlanData() {
    this.planService.getdata(this.customerId).subscribe((res: any) => {
      this.planList = res;
      this.totaldata = res.length;
      this.dataList = res;
      this.planDataSource = new MatTableDataSource(res);
      this.planDataSource.sort = this.planSort;
      this.planDataSource.paginator = this.paginator;
    });
  }

  close(filter: any) {
    switch (filter) {
      case 'toggleEmpIdFilter':
        this.toggleEmpIdFilter = false;
        break;
      case 'toggleEmpNameFilter':
        this.toggleEmpNameFilter = false;
        break;
      case 'toggleEmpHireDateFilter':
        this.toggleEmpHireDateFilter = false;
        break;
      case 'toggleEmpTermDateFilter':
        this.toggleEmpTermDateFilter = false;
        break;
      case 'toggleEmpStatusFilter':
        this.toggleEmpStatusFilter = false;
        break;
      case 'toggleEmpTypeFilter':
        this.toggleEmpTypeFilter = false;
        break;
      case 'toggleEmpfullTimeStatusFilter':
        this.toggleEmpfullTimeStatusFilter = false;
        break;
      case 'toggleEmpPayTypeFilter':
        this.toggleEmpPayTypeFilter = false;
        break;
      case 'toggleEmphomeDeptFilter':
        this.toggleEmphomeDeptFilter = false;
        break;
      case 'toggleEmphomeLocationFilter':
        this.toggleEmphomeLocationFilter = false;
        break;
      case 'toggleEmpDOBFilter':
        this.toggleEmpDOBFilter = false;
        break;
    }
  }

  showFilter(filter: any) {
    this.toggleEmpIdFilter = false;
    this.toggleEmpNameFilter = false;
    this.toggleEmpHireDateFilter = false;
    this.toggleEmpTermDateFilter = false;
    this.toggleEmpStatusFilter = false;
    this.toggleEmpTypeFilter = false;
    this.toggleEmpfullTimeStatusFilter = false;
    this.toggleEmpPayTypeFilter = false;
    this.toggleEmphomeDeptFilter = false;
    this.toggleEmphomeLocationFilter = false;
    this.toggleEmpDOBFilter = false;

    switch (filter) {
      case 'toggleEmpIdFilter':
        this.toggleEmpIdFilter = !this.toggleEmpIdFilter;

        break;
      case 'toggleEmpNameFilter':
        this.toggleEmpNameFilter = !this.toggleEmpNameFilter;
        break;
      case 'toggleEmpHireDateFilter':
        this.toggleEmpHireDateFilter = !this.toggleEmpHireDateFilter;
        break;
      case 'toggleEmpTermDateFilter':
        this.toggleEmpTermDateFilter = !this.toggleEmpTermDateFilter;
        break;
      case 'toggleEmpStatusFilter':
        this.toggleEmpStatusFilter = !this.toggleEmpStatusFilter;
        break;
      case 'toggleEmpTypeFilter':
        this.toggleEmpTypeFilter = !this.toggleEmpTypeFilter;
        break;
      case 'toggleEmpfullTimeStatusFilter':
        this.toggleEmpfullTimeStatusFilter =
          !this.toggleEmpfullTimeStatusFilter;
        break;
      case 'toggleEmpPayTypeFilter':
        this.toggleEmpPayTypeFilter = !this.toggleEmpPayTypeFilter;
        break;
      case 'toggleEmphomeDeptFilter':
        this.toggleEmphomeDeptFilter = !this.toggleEmphomeDeptFilter;
        break;
      case 'toggleEmphomeLocationFilter':
        this.toggleEmphomeLocationFilter = !this.toggleEmphomeLocationFilter;
        break;
      case 'toggleEmpDOBFilter':
        this.toggleEmpDOBFilter = !this.toggleEmpDOBFilter;
        break;
    }
  }


  public ngOnInit(): void {


    this.dropdownlist = {
      'All Employees': 'All Employees',
    };
    
    this.customerId = localStorage.getItem('dataSource');
    this.getPlanData();
    // this.allActive = [];
   
    // this.allEmployee()
    this.allActive = [];
      
      this.http
        .get(
          'https://dev.api.syncstream.io/api/employee/list-type-all-employee/get-all-employees/' +
            this.customerId
        )
        .subscribe((data) => {
          this.allActive = data;
          this.dataSource = new MatTableDataSource(this.allActive);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.epaginator;

        });
    
  }

  // allEmployee(){
  //   this.http.get('https://dev.api.syncstream.io/api/employee/list-type-all-employee/get-all-employees/' +
  //   this.customerId).subscribe(res=>{
  //     this.allActive = res
  //   })
  // }



  onOptionsSelected(value: string) {
   
    

    if (value == 'All_Employees') {
      this.allActive = [];
      
      this.http
        .get(
          'https://dev.api.syncstream.io/api/employee/list-type-all-employee/get-all-employees/' +
            this.customerId
        )
        .subscribe((data) => {
          this.allActive = data;
          this.dataSource = new MatTableDataSource(this.allActive);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.epaginator;

        });
    } 
    else if (value == 'Active_emp') {
      this.allActive = [];

      this.http
        .get(
          'https://dev.api.syncstream.io/api/employee/list-type-all-active-employee/get-all-active-employees/' +
            this.customerId
        )
        .subscribe((data) => {
          this.allActive = data;
          this.dataSource = new MatTableDataSource(this.allActive);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.epaginator;
        });
    } else if (value == 'emp_without') {
      this.allActive = [];

      this.http
        .get(
          'https://dev.api.syncstream.io/api/employee/list-type-employees-without-any-plan/get-employees-without-any-plan/' +
            this.customerId
        )
        .subscribe((data) => {
          this.allActive = data;
          this.dataSource = new MatTableDataSource(this.allActive);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.epaginator;
        });
    } else if (value == 'emp_not') {
      this.allActive = [];

      this.http
        .get(
          'https://dev.api.syncstream.io/api/employee/list-type-employees-not-assigned-to-plan/get-employees-not-assigned-to-plan/' +
            this.customerId +
            '/' +
            this.planList.planName
        )
        .subscribe((data) => {
          this.allActive = data;
          this.dataSource = new MatTableDataSource(this.allActive);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.epaginator;
        });
    }
   
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.selectedEmpList = this.selection.selected;

      return;
    }

    this.selection.select(...this.dataSource.data);
    this.selectedEmpList = this.selection.selected;
  }
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }


  isAllPlanSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  toggleAllPlanRows() {
    if (this.isAllPlanSelected()) {
      this.selection.clear();
      this.selectedEmpList = this.selection.selected;

      return;
    }

    this.selection.select(...this.dataSource.data);
    this.selectedEmpList = this.selection.selected;
  }
  planCheckboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }


  
  list() {
    
    const navigationExtras: NavigationExtras = {
      state: { example: 'This is an example' },
    };
    this.route.navigate(
      ['/aca-reporting/data/plan-assignment/list-employee-assignments'],
      { state: this.customerName }
    );
  }
  getPlanDet(data: any) {
    this.planDetail = data;
  }

  getSelectedEmpId(ev: any, row: any) {
    if (ev) {
      this.selection.toggle(row);
    }
    this.selectedEmpList = this.selection.selected;
    
  }

  showConfirmationModal() {
    if (this.planDetail != null && this.selectedEmpList.length) {
      let employeeIdsList: any = [];
      this.selectedEmpList.map((item: any) => {
        employeeIdsList.push(item.employeeid);
      });
      const dialogRef = this.dialog.open(
        AcaReportingConfirmEmployeeDialogComponent,
        {
          width: '600px',
          data: {
            empList: employeeIdsList,
            planData: this.planDetail,
          },
          panelClass: ['custom-style'],
        }
      );

      dialogRef.afterClosed().subscribe((result) => {});
    } else {
      if (this.planDetail == null) {
        const dialogRef = this.dialog.open(ErrorModalComponent, {
          width: '600px',
          data: {
            headermsg: 'ERROR',
            bodymsg:
              'Please check off Plans you wish to add or remove before clicking the button',
          },
          panelClass: ['custom-style'],
        });

        dialogRef.afterClosed().subscribe((result) => {});
      } else {
        const dialogRef = this.dialog.open(ErrorModalComponent, {
          width: '600px',
          data: {
            headermsg: 'ERROR',
            bodymsg:
              'You have not selected any Employee, Please select Employee',
          },
          panelClass: ['custom-style'],
        });

        dialogRef.afterClosed().subscribe((result) => {});
      }
    }
  }

  showRemoveModal() {
    if (this.planDetail != null && this.selectedEmpList.length) {
      let employeeIdsList: any = [];
      this.selectedEmpList.map((item: any) => {
        employeeIdsList.push(item.employeeid);
      });
      const dialogRef = this.dialog.open(ReConfirmPlanComponent, {
        width: '600px',
        data: {
          empList: employeeIdsList,
          planData: this.planDetail,
        },
        panelClass: ['custom-style'],
      });

      dialogRef.afterClosed().subscribe((result) => {});
    }
    
    else{
      if (this.planDetail == null) {
        const dialogRef = this.dialog.open(ErrorModalComponent, {
          width: '600px',
          data: {
            headermsg: 'ERROR',
            bodymsg:
              'Please check off Plans you wish to add or remove before clicking the button',
          },
          panelClass: ['custom-style'],
        });

        dialogRef.afterClosed().subscribe((result) => {});
      } else {
        const dialogRef = this.dialog.open(ErrorModalComponent, {
          width: '600px',
          data: {
            headermsg: 'ERROR',
            bodymsg:
              'You have not selected any Employee, Please select Employee',
          },
          panelClass: ['custom-style'],
        });

        dialogRef.afterClosed().subscribe((result) => {});
      }
    }
  }
}
