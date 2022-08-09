import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  @Input() i: any;
  constructor() { }
  public selectedvalue2:any
  public selectedvalue3:any
  ngOnInit(): void {
  }

}
