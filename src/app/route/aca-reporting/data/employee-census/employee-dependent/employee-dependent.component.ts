import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Logger } from 'aws-amplify';

import { CustomersSetupService } from 'src/app/service/customers-setup.service';
import { EmployeeCensusService } from 'src/app/service/employee-census.service';
import { UpdateEmployeeDependentComponent } from '../update-employee-dependent/update-employee-dependent.component';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
@Component({
  selector: 'app-employee-dependent',
  templateUrl: './employee-dependent.component.html',
  styleUrls: ['./employee-dependent.component.css']
})
export class EmployeeDependentComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  selection: SelectionModel<any>;

  form!: FormGroup
  public EmployeeData: any = []
  customerId: any
  params1: any
  public companyname: any
  Employeeid1: any = []
  tempArr: any = []
  Id: any
  eployye1: any =[]
  public onclick: boolean = false
  dependent: any = []
  shown: boolean = false
  mergearray: any = []

  pagesizelimit: any = 5;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  activePageDataChunk: any = []
  firsttime: any = 5
  custN : any;
  pageEvent: PageEvent | undefined;
  data: any;

  constructor(private fb: FormBuilder,
    private customerService: CustomersSetupService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    public _MatPaginatorIntl: MatPaginatorIntl,
    private census:EmployeeCensusService)
     {
    this.route.queryParams.subscribe(params => {
      this.params1 = params['customer_id']
      this.dataSource = new MatTableDataSource();
    this.selection = new SelectionModel<any>(true, []);
    })

  }
  ngOnInit(): void {
    this.getEmpData();
    this.getdependent();
    // this._MatPaginatorIntl.itemsPerPageLabel = 'Page Size  --->';


    let custNamee = localStorage.getItem("CurrentCustomerName")
    this.custN = custNamee

  }
  displayedColumns: string[] = [
    'select',
    'remove',
    'edit',
    'employeeId',
    'employeename',
    'dependentName',
    'dependentFirstName',
    'dependentMiddleName',
    'dependentLastName',
    'relationship',
    'dependentSSN',
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
    'homeLocation',
    'dateOfBirth',
    'employeeEmail',
    'primaryWorksiteZipCode',
    'countyofWorksite',
    'countyofResidence',
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
  getSelectedEmpIdd(ev: any, row: any) {
    if (ev) {
      this.selection.toggle(row);
    }
    console.log(this.selection.selected);
    this.dependent = this.selection.selected;
    
    console.log(this.dependent);
  }


 
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  onPageChanged(e: any) {
    this.pageSize = e.pageSize
    this.firsttime = e.pageSize
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.pagesizelimit = secondCut
    this.activePageDataChunk = this.mergearray.slice(firstCut, secondCut);
  }



  number(event: any): boolean {
    const number = (event.check) ? event.check : event.keyCode;
    if (number > 31 && (number < 48 || number > 57)) {
      return false;
    }
    return true;
  }

  getEmpData() {
    this.census.getEmployeeData(this.params1).subscribe((res) => {
      this.EmployeeData = res
      this.dataSource = new MatTableDataSource(this.EmployeeData);
      this.dataSource.sort = this.sorti;
      this.dataSource.paginator = this.paginator;
    })
  }
  getCompanyName() {
    const com = this.customerService.sharedData$
      .subscribe(sharedData => this.companyname = sharedData);
    const id = this.customerService.customerID$.subscribe(customerID => this.customerId = customerID);

  }
  OPenDilogbox(EMP_id: any) {
    const dialogRef = this.dialog.open(UpdateEmployeeDependentComponent, {
      data: { Employee_id: EMP_id, Emp_data: this.mergearray }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }
  onChangeCategory(event: any, item: any) {
    this.tempArr.push(item);
    this.eployye1 = this.tempArr
  }

  onRemoveCheckAll(event: any) {
    this.onclick = !this.onclick
  }

  RemoveDependent() {
    if (this.onclick === true) {
      this.census.DeleteAllCensusRemove(this.params1).subscribe((res) => {
        this.census.DeleteAllDepentendDtata(this.params1).subscribe((res) => {
          window.location.reload()
        })
      })

    } else {
      this.eployye1.forEach((value: any) => {

        this.census.CensusRemove(this.params1, value).subscribe((res) => {
          this.census.DependentRemove(this.params1, value).subscribe((res) => {
            window.location.reload()
          })
        })
      });
    }
  }
  removeSelectedRows() {

    this.selection.selected.forEach(item => {
      let index: number = this.data.findIndex((d: any) => d === item);
      console.log(this.data.findIndex((d: any)=> d === item));
      this.data.splice(index,1)
      this.dataSource = new MatTableDataSource<Element>(this.data);
    });
    this.selection = new SelectionModel<Element>(true, []);
  }

  getdependent() {

    this.census.getDependent(this.params1).subscribe((res) => {
      this.dependent = res

      this.dataSource = new MatTableDataSource(this.dependent);
      this.dataSource.sort = this.sorti;
      this.dataSource.paginator = this.paginator;


      // this.mergearray = this.dependent.map((item: any, i: any) => Object.assign({}, item, this.EmployeeData[i]));
      // this.activePageDataChunk = this.mergearray.slice(0, this.pageSize);

    })
  }


  Showmore() {
    let firstCut = 0
    this.firsttime = this.firsttime + this.pageSize
    this.activePageDataChunk = this.dependent.slice(firstCut, this.firsttime);
  }

}
