import { Component, OnInit, ViewChild } from '@angular/core';
import { faRotateLeft,faPrint,faFileExcel,faFileArrowDown,faFileImport} from '@fortawesome/free-solid-svg-icons';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { YearendserviceService } from 'src/app/service/yearendservice.service';
@Component({
  selector: 'app-fplsafe',
  templateUrl: './fplsafe.component.html',
  styleUrls: ['./fplsafe.component.css']
})
export class FplsafeComponent implements OnInit {

  custname:any
  currentTaxYear:any
  faRotateLeft = faRotateLeft
  faPrint = faPrint
  faFileExcel = faFileExcel
  faFileArrowDown = faFileArrowDown
  faFileImport = faFileImport
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
    this.FPLSafeHarborList()
  }


  displayedColumns: string[] = [
    'employeeid',
    'employeename',
    'amt95ofmoamt',
    'reqmocontrib',
    'safeHarborFPLSatisfied',
   
  ];
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
   
    this.dataSource.sort = this.sort;
  }

  FPLSafeHarborList(){
    this.yearendService.listFPlSafeHarbor(this.cId,this.currentTaxYear).subscribe((res:any)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
    })
  }

}
