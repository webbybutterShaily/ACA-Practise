import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewEmailTemplateComponent } from '../new-email-template/new-email-template.component';
declare const myTest5: any;

export interface PeriodicElement {
  previewtype: string;
  filedlink: any;
  printmall:any;
  totalforms: any
}
export interface PeriodicElement1 {
  Year: string;
  Breaksname: any;
  Startdate: any;
  Enddate: string;
  emp: any;
  emptype: any;
  PayType: any;
  HomeLocation: any;
  employeeemail: any;
}
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  displayedColumns: string[] = ['filedlink', 'previewtype' , 'printmall' , 'totalforms'];
  displayedColumns1: string[] = ['select', 'Year', 'Breaksname', 'employeeemail' , 'Startdate', 'Enddate', 'emp', 'emptype', 'PayType', 'HomeLocation' , ];
  // public dataSource!: MatTableDataSource<PeriodicElement>;
  dataSource: PeriodicElement[] = [
  ];
  dataSource1: PeriodicElement1[] = [
    // { Year: '2022', Breaksname: "Test Break 1", Startdate: "5/24/2022", Enddate: '7/24/2022', emp: "active", emptype: "tyepe1", PayType: "Monthly", HomeLocation: "hl" },
    
  ];

  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  
  onClick() {
    myTest5();
  
  }

  Addnewbutton(){
    const dialogRef = this.dialog.open(NewEmailTemplateComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }
}
