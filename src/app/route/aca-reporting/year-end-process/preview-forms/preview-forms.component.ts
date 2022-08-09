import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IndicatorDailogComponent } from 'src/app/acacomponent/ACA-Audit/indicator-dailog/indicator-dailog.component';
import { AdHocBulkEditsComponent } from '../ad-hoc-edits/ad-hoc-bulk-edits/ad-hoc-bulk-edits.component';
import { CurrentForm1095CDataComponent } from '../current-form1095-cdata/current-form1095-cdata.component';
import { faTable,faCircleCheck } from '@fortawesome/free-solid-svg-icons';

declare const myTest2: any;

export interface PeriodicElement {
  previewtype: string;
  filedlink: any;
  timestamp: any;
  user: string;
  Noofforms:any;
}


@Component({
  selector: 'app-preview-forms',
  templateUrl: './preview-forms.component.html',
  styleUrls: ['./preview-forms.component.css']
})
export class PreviewFormsComponent implements OnInit {
    displayedColumns: string[] = ['filedlink', 'previewtype', 'timestamp', 'user', 'Noofforms'];
    // public dataSource!: MatTableDataSource<PeriodicElement>;
    dataSource: PeriodicElement[] = [

    ];



  filmIcon = faTable;
  circlecheck = faCircleCheck

  constructor(private dialog: MatDialog,
    private route:Router) { }
  TableData = new MatTableDataSource(this.dataSource);
  dataSourceWithPageSize = new MatTableDataSource(this.dataSource);
  ngOnInit(): void {
  }
  onClick() {
    myTest2();
  }
  openindicatormatix(){
    const dialogRef = this.dialog.open(IndicatorDailogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }
  openTableviewform(){
   this.route.navigateByUrl('aca-reporting/year-end-process/current-form-1095')
  }
}
