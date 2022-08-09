import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: ''},
 
];
@Component({
  selector: 'app-form-respository',
  templateUrl: './form-respository.component.html',
  styleUrls: ['./form-respository.component.css']
})
export class FormRespositoryComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
