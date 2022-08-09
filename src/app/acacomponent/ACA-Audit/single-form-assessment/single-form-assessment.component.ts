import { IndicatorDailogComponent } from './../indicator-dailog/indicator-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


export interface data {
  id: string;
  name: string;
}

@Component({
  selector: 'app-single-form-assessment',
  templateUrl: './single-form-assessment.component.html',
  styleUrls: ['./single-form-assessment.component.css']
})

export class SingleFormAssessmentComponent implements OnInit {
  form!: FormGroup

  array1 = ['1K', '1J', '1A', '1B', '1C', '1D', '1E', '1G', '1H', '1l']
  array2 = ['2A', '2B', '2C', '2E', '2F', '2G', '2H', '2l']

 


  constructor(private fb: FormBuilder, private dialog: MatDialog, private http: HttpClient) {
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
  openDialog() {
    const dialogRef = this.dialog.open(IndicatorDailogComponent, {
      id: "code_metrix"
    });

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }
  get() {
    console.log("=========", this.form.value);

  }
  number(event: any): boolean {
    const number = (event.check) ? event.check : event.keyCode;
    if (number > 31 && (number < 48 || number > 57)) {
      return false;
    }
    return true;
  }


}


