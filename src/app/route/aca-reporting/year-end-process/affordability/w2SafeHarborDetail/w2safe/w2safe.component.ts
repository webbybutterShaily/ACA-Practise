import { Component, OnInit, ViewChild } from '@angular/core';
import { faRotateLeft,faPrint,faFileExcel,faFileArrowDown} from '@fortawesome/free-solid-svg-icons';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { YearendserviceService } from 'src/app/service/yearendservice.service';
@Component({
  selector: 'app-w2safe',
  templateUrl: './w2safe.component.html',
  styleUrls: ['./w2safe.component.css']
})
export class W2safeComponent implements OnInit {
  custname:any
  currentTaxYear:any
  faRotateLeft = faRotateLeft
  faPrint = faPrint
  faFileExcel = faFileExcel
  faFileArrowDown = faFileArrowDown
  dataSource: MatTableDataSource<any>;
  cId: any;

  // selection: SelectionModel<any>;



  constructor(private yearendService: YearendserviceService) { 
    this.dataSource = new MatTableDataSource();
    // this.selection = new SelectionModel<any>(true, []);
  }

  ngOnInit(): void {
    let custnamee = localStorage.getItem("CurrentCustomerName")
    this.custname = custnamee
    let CustId = localStorage.getItem('dataSource');
    this.cId = CustId;
    let CurrentTaxYear = sessionStorage.getItem("CurrentTaxYear")
    this.currentTaxYear= CurrentTaxYear

    this.w2SafeHarborList()
  }


  displayedColumns: string[] = [
    'employeeid',
    'employeename',
    'box1wages',
    'reqcontriblowestselfonlyplan',
    'hireDate',
    'termDate',
    'daysbetweenhireandterm',
    'reqempladjcontrib',
    'reqadjpcttest',
    'safeHarborPassed',
   
  ];
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
   
    this.dataSource.sort = this.sort;
  }

  w2SafeHarborList(){
    this.yearendService.listW2SafeHarbor(this.cId,this.currentTaxYear).subscribe((res:any)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
    })
  }
}
