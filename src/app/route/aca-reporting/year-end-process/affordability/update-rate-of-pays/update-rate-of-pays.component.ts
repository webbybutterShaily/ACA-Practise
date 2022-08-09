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
  selector: 'app-update-rate-of-pays',
  templateUrl: './update-rate-of-pays.component.html',
  styleUrls: ['./update-rate-of-pays.component.css'],
})
export class UpdateRateOfPaysComponent implements OnInit {
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
  reportingMonth: any;
  rateOfPayVal: any;
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

    this.ROPWagesList();
    console.log(this.editId);
  }

  displayedColumns: string[] = [
    'select',
    'remove',
    'edit',
    'employeeId',
    'employeename',
    'reportingMonth',
    'rateOfPay',
  ];
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ROPWagesList() {
    this.yearendService
      .getROPWages(this.cId, this.currentTaxYear)
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
    this.editId = row.employeeId;
    this.reportingMonth = row.reportingMonth;
    this.rateOfPayVal = row.rateOfPay;
  }
  saveBoxWages(element: any) {
    let data = {
      customerId: parseInt(this.cId),
      employeeId: this.editId,
      taxYear: parseInt(this.currentTaxYear),
      rateOfPay: this.rateOfPayVal,
      reportingMonth: element.reportingMonth,
    };
    this.yearendService.updateROPWages(data).subscribe((res: any) => {
      if (res.success) {
        this.editId = null;
        this.reportingMonth = null;
        this.rateOfPayVal = null;
        this.ROPWagesList();
      }
    });
  }

  cancelUpdate() {
    this.editId = null;
    this.reportingMonth = null;
    this.rateOfPayVal = null;
  }

  removeWages() {
    console.log(this.selectedWagesList);

    
  }
}
