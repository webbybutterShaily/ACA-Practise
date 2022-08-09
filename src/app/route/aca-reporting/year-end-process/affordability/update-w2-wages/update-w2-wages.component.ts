import { Component, OnInit, ViewChild } from '@angular/core';
import {
  faRotateLeft,
  faPrint,
  faFileExcel,
  faFileArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { YearendserviceService } from 'src/app/service/yearendservice.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-update-w2-wages',
  templateUrl: './update-w2-wages.component.html',
  styleUrls: ['./update-w2-wages.component.css'],
})
export class UpdateW2WagesComponent implements OnInit {
  custname: any;
  currentTaxYear: any;
  faRotateLeft = faRotateLeft;
  faPrint = faPrint;
  faFileExcel = faFileExcel;
  faFileArrowDown = faFileArrowDown;
  dataSource: MatTableDataSource<any>;
  cId: any;
  selectedWagesList: any = [];

  selection: SelectionModel<any>;
  editId: any;
  boxWagesVal: any;
  constructor(private yearendService: YearendserviceService) {
    this.dataSource = new MatTableDataSource();
    this.selection = new SelectionModel<any>(true, []);
  }

  ngOnInit(): void {
    let custnamee = localStorage.getItem('CurrentCustomerName');
    this.custname = custnamee;
    let CustId = localStorage.getItem('dataSource');
    this.cId = CustId;
    let CurrentTaxYear = sessionStorage.getItem('CurrentTaxYear');
    this.currentTaxYear = CurrentTaxYear;

    this.w2WagesList();
  }

  displayedColumns: string[] = [
    'select',
    'remove',
    'edit',
    'employeeid',
    'employeename',
    'box1wages',
  ];
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  w2WagesList() {
    this.yearendService
      .getW2Wages(this.cId, this.currentTaxYear)
      .subscribe((res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
      });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.selectedWagesList = this.selection.selected;

      return;
    }

    this.selection.select(...this.dataSource.data);
    this.selectedWagesList = this.selection.selected;
  }
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
  getSelectedEmpId(ev: any, row: any) {
    if (ev) {
      this.selection.toggle(row);
    }
    this.selectedWagesList = this.selection.selected;
  }
  editRow(row: any) {
    this.editId = row.employeeid;
    this.boxWagesVal = row.box1wages;
  }
  saveBoxWages() {
    console.log(this.boxWagesVal);
    let data = {
      customerId: parseInt(this.cId),
      employeeId: this.editId,
      taxYear: parseInt(this.currentTaxYear),
      box1Wages: this.boxWagesVal,
    };
    this.yearendService.updateW2Wages(data).subscribe((res:any) => {
      if (res.success) {
        this.editId = null;
        this.boxWagesVal = null;
        this.w2WagesList();
      }
    });
  }

  cancelUpdate() {
    this.editId = null;
    this.boxWagesVal = null;
  }

  removeWages(){
    console.log(this.selectedWagesList)

    let employeeIds:any = []
    this.selectedWagesList.map((item:any)=>{
      employeeIds.push(item.employeeid)
    })

    let data = {
      customerId: parseInt(this.cId),
      employeeIds: employeeIds,
      taxYear: parseInt(this.currentTaxYear),
    }
    
    this.yearendService.removeW2Wages(data).subscribe(res=>{
      console.log(res)
    })
  }
}
