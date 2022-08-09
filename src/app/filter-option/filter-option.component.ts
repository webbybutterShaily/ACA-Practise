import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.css']
})
export class FilterOptionComponent implements OnInit {

  constructor() { }
  selectedOption:any 
  ngOnInit(): void {
  }
  @Input() options: any = []

}
