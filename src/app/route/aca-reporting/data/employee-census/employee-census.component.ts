import { EditEmployeePageCensusComponent } from './edit-employee-page-census/edit-employee-page-census.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersSetupService } from 'src/app/service/customers-setup.service';
import { EmployeeCensusService } from 'src/app/service/employee-census.service';
import { CreateNewEmployeeDialogComponent } from './create-new-employee-dialog/create-new-employee-dialog.component';
import { UpdateEmployeeDependentComponent } from './update-employee-dependent/update-employee-dependent.component';
import { CensusConformationComponent } from './census-conformation/census-conformation.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
// import { faCoffee,faBookOpenReader,faChalkboardUser } from '@fortawesome/free-solid-svg-icons';

/**
 * This class maintains the route component structure for the ACA Reporting Data Employee Census page
 * @class
 */
@Component({ selector: 'app-aca-reporting-data-employee-census', templateUrl: './employee-census.component.html', styleUrls: ['./employee-census.component.css'] })
export class AcaReportingDataEmployeeCensusComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  selection: SelectionModel<any>;
  /**
   * This method instantiates our route component with injected dependencies
   */
  public companyname: any;
  public customerId: any;
  mergearray: any = [];
  public EmployeeData: any = [];
  params1: any;
  Employeeid1: any = [];
  tempArr: any = [];
  Id: any;
  eployye1: any = [];
  public onclick: boolean = false;
  dependent: any = [];
  shown: boolean = false;
  public pagesizelimt: any = 5;
  column: string = 'firstName';
  // faChalkboardUser = faChalkboardUser
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  activePageDataChunk: any = [];
  allemployeedetails: any = [];
  public length: any;
  public length1: any;
  pageEvent: PageEvent | undefined;
  templist = []
  order: any = '';
  isDesc: boolean = false;
  issettrue: boolean = false;
  isdertionsettrue: boolean = false;
  main: boolean = true;
  firsttime: any = 5;
  isid: boolean = false;
  isempname: boolean = false;
  isfname: boolean = false;

  ismname: boolean = false;
  islname: boolean = false;
  isssn: boolean = false;
  isefdate: boolean = false;
  ishdate: boolean = false;
  istrdate: boolean = false;
  isempstatus: boolean = false;
  isemptype: boolean = false;
  isptype: boolean = false;
  isaddress: boolean = false;
  iscity: boolean = false;
  isscode: boolean = false;
  ishd: boolean = false;
  ishl: boolean = false;
  isdob: boolean = false;
  isemail: boolean = false;

  ispwkz: boolean = false;
  iscofw: boolean = false;
  iscofres: boolean = false;
  ismiscell: boolean = false;
  iselect: boolean = false;
  isdepenname: boolean = false;
  isrelation: boolean = false;
  data: any;


  public constructor(private dialog: MatDialog,
    private customerService: CustomersSetupService,
    private router: Router,
    private route: ActivatedRoute,
    public _MatPaginatorIntl: MatPaginatorIntl,
    private census: EmployeeCensusService) {

    this.customerId = localStorage.getItem('dataSource')
    this.dataSource = new MatTableDataSource();
    this.selection = new SelectionModel<any>(true, []);
  }

  /**
   * This method fires when the component is initialized
   * @returns {void}
   */

  displayedColumns: string[] = [
    'select',
    'remove',
    'edit',
    'employeeid',
    'employeename',
    'dependentName',
    'firstname',
    'middlename',
    'lastname',
    'relationship',
    'ssn',
    'effectiveDate',
    'hireDate',
    'terminationDate',
    'employeestatus',
    'employeetype',
    'paytype',
    'addressline1',
    'city',
    'statecode',
    'homedepartment',
    'dateOfBirth',
    'employeeemail',
    'primaryworksitezipcode',
    'countyofworksite',
    'countyofresidence',
    'miscellaneous',
    'isElectronicallyConsented',

  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorti!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sorti;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }




  public ngOnInit(): void {
    this.showAllEmployee()
    this.getdemployee();
    this.getCompanyName();
    this._MatPaginatorIntl.itemsPerPageLabel = 'Page Size  --->';

  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  onPageChanged(e: any) {
    this.pageSize = e.pageSize
    this.firsttime = e.pageSize
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.pagesizelimt = secondCut
    this.activePageDataChunk = this.dependent.slice(firstCut, secondCut);
  }

  Showmore() {
    let firstCut = 0
    this.firsttime = this.firsttime + this.pageSize
    this.activePageDataChunk = this.dependent.slice(firstCut, this.firsttime);
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateNewEmployeeDialogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }
  getCompanyName() {
    const com = this.customerService.sharedData$
      .subscribe(sharedData => this.companyname = sharedData);

  }
  navigatelist() {
    this.router.navigateByUrl(`/EmployeeDependent?customer_id=${this.customerId}`, {
      state: {
        compName: 'employeecensus'
      }
    })

  }

  onChangeCategory(event: any, item: any, effactivedate: any) {
    const data = {
      customerId: Number(this.customerId),
      employeeId: item,
      effectiveDate: effactivedate
    }

    this.tempArr.push(data);
    this.eployye1 = this.tempArr

  }

  onRemoveCheckAll(event: any) {
    this.onclick = !this.onclick
  }
  OPenDilogbox(EMP_id: any) {
    const dialogRef = this.dialog.open(EditEmployeePageCensusComponent, {
      data: { Employee_id: EMP_id, Emp_data: this.activePageDataChunk }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }



  RemoveEmployeeCausse() {
    if (this.eployye1.length === 0) {
      alert("Please Select the Employee..........................")
    } else {

      const dialogRef = this.dialog.open(CensusConformationComponent, {
        // id: "pop1",
        data: this.eployye1
      });

      dialogRef.afterClosed().subscribe((result: any) => {
      });

    }

  }

  getdemployee() {

    this.census
      .GetemployeeDetails(this.customerId)
      .subscribe((res) => {
        this.dependent = res

        this.dataSource = new MatTableDataSource(this.allemployeedetails);
        this.dataSource.sort = this.sorti;
        this.dataSource.paginator = this.paginator;

        this.length = this.dependent.length
        this.activePageDataChunk = this.dependent.slice(0, this.pageSize);
      })
  }
  getSelectedEmpIdd(ev: any, row: any) {
    if (ev) {
      this.selection.toggle(row);
    }
    this.allemployeedetails = this.selection.selected;

  }

  removeSelectedRows() {

    this.selection.selected.forEach(item => {
      let index: number = this.data.findIndex((d: any) => d === item);
      this.data.splice(index, 1)
      this.dataSource = new MatTableDataSource<Element>(this.data);
    });
    this.selection = new SelectionModel<Element>(true, []);
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  removeemp() {

    if (this.dataSource != null) {
      alert("hii")
      this.census.Removeemployeecausse(this.customerId, this.Employeeid1).subscribe(res => {

      })
    } else {
      alert("please choose employee")
    }





  }


  showActiveEmployee() {
    this.shown = !this.shown
    const results = this.activePageDataChunk.filter((x: { employeestatus: any; }) => x.employeestatus === "Active")
    this.activePageDataChunk = results
    this.dataSource = new MatTableDataSource(this.activePageDataChunk);
    this.dataSource.sort = this.sorti;
    this.dataSource.paginator = this.paginator;

    this.length1 = this.activePageDataChunk.length
  }


  showAllEmployee() {
    this.shown = false;
    this.census
      .getallemployeeDetails(this.customerId)
      .subscribe((res) => {
        this.allemployeedetails = res
        this.dataSource = new MatTableDataSource(this.allemployeedetails);
        this.dataSource.sort = this.sorti;
        this.dataSource.paginator = this.paginator;
        this.length = this.allemployeedetails.length
        this.activePageDataChunk = this.dependent.slice(0, this.pageSize);

      })


  }


}
