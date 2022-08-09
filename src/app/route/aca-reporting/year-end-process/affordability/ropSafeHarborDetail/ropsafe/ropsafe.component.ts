import { Component, OnInit, ViewChild } from '@angular/core';
import { faRotateLeft,faPrint,faFileExcel,faFileArrowDown} from '@fortawesome/free-solid-svg-icons';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { YearendserviceService } from 'src/app/service/yearendservice.service';
@Component({
  selector: 'app-ropsafe',
  templateUrl: './ropsafe.component.html',
  styleUrls: ['./ropsafe.component.css']
})
export class RopsafeComponent implements OnInit {

  custname:any
  currentTaxYear:any
  faRotateLeft = faRotateLeft
  faPrint = faPrint
  faFileExcel = faFileExcel
  faFileArrowDown = faFileArrowDown
  dataSource: MatTableDataSource<any>;
  // selection: SelectionModel<any>;
  cId: any;



  constructor(private yearendService: YearendserviceService) { 
    this.dataSource = new MatTableDataSource();
    // this.selection = new SelectionModel<any>(true, []);
  }

  ngOnInit(): void {
    let custnamee = localStorage.getItem("CurrentCustomerName")
    this.custname = custnamee
    let CurrentTaxYear = sessionStorage.getItem("CurrentTaxYear")
    this.currentTaxYear= CurrentTaxYear
    let CustId = localStorage.getItem('dataSource');
    this.cId = CustId;
    this.ROPSafeHarborList()
  }


  displayedColumns: string[] = [
    'employeeid',
    'employeename',
    'reportingmonth',
    'rateofpay',
    'numberofhours',
    'amt95oftotalrop',
    'reqmocontrib',
    'hireDate',
    'termDate',
    'safeHarborROPSatisfied',
   
  ];
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
   
    this.dataSource.sort = this.sort;
  }

  ROPSafeHarborList(){
    this.yearendService.listRateOfPaySafeHarbor(this.cId,this.currentTaxYear).subscribe((res:any)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
    })
  }
}
