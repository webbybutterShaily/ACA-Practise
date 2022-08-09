import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faTable, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { IndicatorDailogComponent } from 'src/app/acacomponent/ACA-Audit/indicator-dailog/indicator-dailog.component';
declare const printnav: any;
declare const printnav1: any;
declare const printnav2: any;

@Component({
  selector: 'app-print-to-mail-navbar',
  templateUrl: './print-to-mail-navbar.component.html',
  styleUrls: ['./print-to-mail-navbar.component.css']
})
export class PrintToMailNavbarComponent implements OnInit {
  
  public col="red";
  public col1="cyan";
  public taxyear:any =[];
  circlecheck = faCircleCheck

  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.GetTaxyear();
  }
  onClick() {
    printnav();
  }
  onClick1() {
    printnav1();
  }
  onClick2() {
    printnav2();
  }
  GetTaxyear(){
    const year = sessionStorage.getItem('CurrentTaxYear');
    const data = {
      taxyear:year
    }
    // this.taxyear = data
    this.taxyear.push(data)
    console.log("this.taxyear",this.taxyear);
    
  }
  openindicatormatix() {
    const dialogRef = this.dialog.open(IndicatorDailogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }
}