import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-data',
  templateUrl: './employer-data.component.html',
  styleUrls: ['./employer-data.component.css']
})
export class EmployerDataComponent implements OnInit {
  currentDate1 = new Date;
  currentDate2 = new Date;
  currentDate3 = new Date;
  constructor() { }

  ngOnInit(): void {
  }

}
