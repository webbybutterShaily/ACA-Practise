import { Component, OnInit } from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-addestablishment',
  templateUrl: './addestablishment.component.html',
  styleUrls: ['./addestablishment.component.css']
})
export class AddestablishmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  positionOptions: TooltipPosition[] = [ 'above'];
  position = new FormControl(this.positionOptions[0]);
  custName= localStorage. getItem("CurrentCustomerName")
}
