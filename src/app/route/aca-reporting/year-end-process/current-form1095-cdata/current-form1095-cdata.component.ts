import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { faFileExcel, faRotateLeft, faSort } from '@fortawesome/free-solid-svg-icons';

export interface PeriodicElement {
  Empid: string;
  Emp_name: any;
  Fname: any;
  Mname: string;
  Lname: any;
  ssn: any;

  address: string;
  City: any;
  state: any;
  zipcode: string;
  Allmonth: any;
  jan: any;
  feb: any;
  mar: any;
  apr: string;
  may: any;
  jun: string;
  jul: any;
  aug: any;
  sep: string;
  oct: any;
  nov: string;
  dec: any;

  Allmonth15: any;
  jan15: string;
  feb15: any;
  mar15: any;
  apr15: string;
  may15: any;
  jun15: string;
  jul15: any;
  aug15: any;
  sep15: string;
  oct15: any;
  nov15: string;
  dec15: any;

  Allmonth16: any;
  jan16: string;
  feb16: any;
  mar16: any;
  apr16: string;
  may16: any;
  jun16: string;
  jul16: any;
  aug16: any;
  sep16: string;
  oct16: any;
  nov16: string;
  dec16: any;

  siCoverage: any;
  Corrected: any;
  Voided: any

  Line_number: any
  Name: any
  First_name: any
  Middle_name: any
  Last_name: any
  SSNpart3: any
  DOB: any
  Allmonth_part3: any;
  jan_part3: string;
  feb_part3: any;
  mar_part3: any;
  apr_part3: string;
  may_part3: any;
  jun_part3: string;
  jul_part3: any;
  aug_part3: any;
  sep_part3: string;
  oct_part3: any;
  nov_part3: string;
  dec_part3: any;

}
@Component({
  selector: 'app-current-form1095-cdata',
  templateUrl: './current-form1095-cdata.component.html',
  styleUrls: ['./current-form1095-cdata.component.css']
})
export class CurrentForm1095CDataComponent implements OnInit {
  displayedColumns: string[] = ['Empid', 'Emp_name', 'Fname', 'Mname', 'Lname', 'ssn', 'address', 'City', 'state', 'zipcode',
    'Allmonth', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',
    'Allmonth15', 'jan15', 'feb15', 'mar15', 'apr15', 'may15', 'jun15', 'jul15', 'aug15', 'sep15', 'oct15', 'nov15', 'dec15',
    'Allmonth16', 'jan16', 'feb16', 'mar16', 'apr16', 'may16', 'jun16', 'jul16', 'aug16', 'sep16', 'oct16', 'nov16', 'dec16',
    'siCoverage', 'Corrected', 'Voided', 'Line_number', 'Name', 'First_name', 'Middle_name', 'Last_name', 'SSNpart3', 'DOB',
    'Allmonth_part3', 'jan_part3', 'feb_part3', 'mar_part3', 'apr_part3', 'may_part3', 'jun_part3', 'jul_part3', 'aug_part3', 'sep_part3', 'oct_part3', 'nov_part3', 'dec_part3',];
  // public dataSource!: MatTableDataSource<PeriodicElement>;
  dataSource: PeriodicElement[] = [
       //   { 
  //     Empid: '2022', Emp_name: "Ramesh", Fname: "shuresh", Mname: 'Ramesh',Lname:'Ramesh',
  //   ssn: '2022144', address: "Test Break 1", City: "surat", state: 'gujarat',zipcode:'392012' ,Allmonth:'sdsdsd',
  //   jan: '2022', feb: "Test Break 1", mar: "5/24/2022", apr: '7/24/2022',may:'sdsdsd' ,jun:'sdsdsd',jul:'sdbs',aug:'sdsdsd' ,sep:'sdsdsd',
  //   oct: '2022', nov: "Test Break 1", dec: "5/24/2022", Allmonth15: '7/24/2022',jan15:'sdsdsd' ,feb15:'sdsdsd',mar15:'sdsdsd' ,apr15:'sdsdsd',
  //   may15: '2022', jun15: "Test Break 1", jul15: "5/24/2022", aug15: '7/24/2022',sep15:'sdsdsd' ,oct15:'sdsdsd',nov15:'sdsdsd' ,dec15:'sdsdsd',
  //   Allmonth16: '7/24/2022',jan16:'sdsdsd' ,feb16:'sdsdsd',mar16:'sdsdsd' ,apr16:'sdsdsd',
  //   may16: '2022', jun16: "Test Break 1", jul16: "5/24/2022", aug16: '7/24/2022',sep16:'sdsdsd' ,oct16:'sdsdsd',nov16:'sdsdsd' ,dec16:'sdsdsd',
  //   siCoverage:'desfdfe',Corrected:'swdewde',Voided:'sdsdsw',Line_number:'dsfdf',Name:'sdgfs',First_name:'scdsds',Middle_name:'sdsds',Last_name:'snndgs',
  //   SSNpart3:'sdsd',DOB:'sdfsdf',
  //   Allmonth_part3: '7/24/2022',jan_part3:'sdsdsd' ,feb_part3:'sdsdsd',mar_part3:'sdsdsd' ,apr_part3:'sdsdsd',
  //   may_part3: '2022', jun_part3: "Test Break 1", jul_part3: "5/24/2022", aug_part3: '7/24/2022',sep_part3:'sdsdsd' ,oct_part3:'sdsdsd',nov_part3:'sdsdsd' ,dec_part3:'sdsdsd'},
  
  // {
  //   Empid: '2022', Emp_name: "Ramesh", Fname: "shuresh", Mname: 'shuresh',Lname:'shuresh',
  //   ssn: '202244', address: "Test Break 1", City: "surat", state: 'gujart',zipcode:'392012' ,Allmonth:'sdsdsd',
  //   jan: '2022', feb: "Test Break 1", mar: "5/24/2022", apr: '7/24/2022',may:'sdsdsd' ,jun:'sdsdsd',jul:'sdbs',aug:'sdsdsd' ,sep:'sdsdsd',
  //   oct: '2022', nov: "Test Break 1", dec: "5/24/2022", Allmonth15: '7/24/2022',jan15:'sdsdsd' ,feb15:'sdsdsd',mar15:'sdsdsd' ,apr15:'sdsdsd',
  //   may15: '2022', jun15: "Test Break 1", jul15: "5/24/2022", aug15: '7/24/2022',sep15:'sdsdsd' ,oct15:'sdsdsd',nov15:'sdsdsd' ,dec15:'sdsdsd',
  //   Allmonth16: '7/24/2022',jan16:'sdsdsd' ,feb16:'sdsdsd',mar16:'sdsdsd' ,apr16:'sdsdsd',
  //   may16: '2022', jun16: "Test Break 1", jul16: "5/24/2022", aug16: '7/24/2022',sep16:'sdsdsd' ,oct16:'sdsdsd',nov16:'sdsdsd' ,dec16:'sdsdsd',
  //   siCoverage:'desfdfe',Corrected:'swdewde',Voided:'sdsdsw',Line_number:'dsfdf',Name:'sdgfs',First_name:'scdsds',Middle_name:'sdsds',Last_name:'snndgs',
  //   SSNpart3:'sdsd',DOB:'sdfsdf',
  //   Allmonth_part3: '7/24/2022',jan_part3:'sdsdsd' ,feb_part3:'sdsdsd',mar_part3:'sdsdsd' ,apr_part3:'sdsdsd',
  //   may_part3: '2022', jun_part3: "Test Break 1", jul_part3: "5/24/2022", aug_part3: '7/24/2022',sep_part3:'sdsdsd' ,oct_part3:'sdsdsd',nov_part3:'sdsdsd' ,dec_part3:'sdsdsd'
  // },
  
  ];


  faFileExcel = faFileExcel

  constructor(private route: Router) { }

  rotatedicone = faRotateLeft

  TableData = new MatTableDataSource(this.dataSource);
  dataSourceWithPageSize = new MatTableDataSource(this.dataSource);

  @ViewChild('paginator')
  paginator!: MatPaginator;
  @ViewChild('paginatorPageSize')
  paginatorPageSize!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit(): void {
    this.TableData.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
    this.TableData.sort = this.sort;
  }

  back() {
    this.route.navigateByUrl('aca-reporting/year-end-process/PreviewForms');
  }
}
