import { IndicatorDailogComponent } from './../../../../acacomponent/ACA-Audit/indicator-dailog/indicator-dailog.component';
import { Component, OnInit } from '@angular/core';
declare const myTest4: any;
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdHocBulkEditsComponent } from './ad-hoc-bulk-edits/ad-hoc-bulk-edits.component';
@Component({
  selector: 'app-ad-hoc-edits',
  templateUrl: './ad-hoc-edits.component.html',
  styleUrls: ['./ad-hoc-edits.component.css']
})
export class AdHocEditsComponent implements OnInit {
  form!: FormGroup
  array1=['1K', '1J', '1A', '1B', '1C', '1D', '1E', '1G', '1H', '1l']
  array2 = ['2A', '2B', '2C', '2E', '2F', '2G', '2H', '2l']
  constructor(private fb: FormBuilder,private dialog:MatDialog) { 
    this.form = this.fb.group({
      first: this.fb.group({
        All12Months: '',
        Jan: '',
        Feb: '',
        Mar: '',
        Apr: '',
        May: '',
        Jun: '',
        July: '',
        Aug: '',
        Sep: '',
        Oct: '',
        Nav: '',
        Dec: ''
      }),
      second: this.fb.group({
        All12Months: '',
        Jan: '',
        Feb: '',
        Mar: '',
        Apr: '',
        May: '',
        Jun: '',
        July: '',
        Aug: '',
        Sep: '',
        Oct: '',
        Nav: '',
        Dec: ''
      }),
      third: this.fb.group({
        All12Months: '',
        Jan: '',
        Feb: '',
        Mar: '',
        Apr: '',
        May: '',
        Jun: '',
        July: '',
        Aug: '',
        Sep: '',
        Oct: '',
        Nav: '',
        Dec: ''
      })
    })
  }

  ngOnInit(): void {
  }
  onClick() {
    myTest4();
  }
  get(){
    console.log("=========",this.form.value);
    
  }
  number(event:any): boolean {
    const number = (event.check) ? event.check : event.keyCode;
    if (number > 31 && (number < 48 || number > 57)) {
      return false;
    }
    return true;
  }
  openDialog() {
    const dialogRef = this.dialog.open(AdHocBulkEditsComponent,{
      id:"ad_hoc"
    });

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }
  opendialog(){
    const dialogRef = this.dialog.open(IndicatorDailogComponent,{
     
    });

    dialogRef.afterClosed().subscribe((result: any) => {
    });

  }
}
