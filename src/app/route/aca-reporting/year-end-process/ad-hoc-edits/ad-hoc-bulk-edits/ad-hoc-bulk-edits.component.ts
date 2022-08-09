import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ad-hoc-bulk-edits',
  templateUrl: './ad-hoc-bulk-edits.component.html',
  styleUrls: ['./ad-hoc-bulk-edits.component.css']
})
export class AdHocBulkEditsComponent implements OnInit {
  form!: FormGroup
  array1 = ['1K', '1J', '1A', '1B', '1C', '1D', '1E', '1G', '1H', '1l']
  array2 = ['2A', '2B', '2C', '2E', '2F', '2G', '2H', '2l']
  constructor(private fb: FormBuilder) {
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
  number(event: any): boolean {
    const number = (event.check) ? event.check : event.keyCode;
    if (number > 31 && (number < 48 || number > 57)) {
      return false;
    }
    return true;
  }
}
