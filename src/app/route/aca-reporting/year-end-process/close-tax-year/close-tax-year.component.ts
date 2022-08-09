import { Component, OnInit } from '@angular/core';
declare const myTest7: any;
@Component({
  selector: 'app-close-tax-year',
  templateUrl: './close-tax-year.component.html',
  styleUrls: ['./close-tax-year.component.css']
})
export class CloseTaxYearComponent implements OnInit {
public username="Pallav Joshi";
public userEmail="abtacchino@gmail.com"
public tDate1="01/06/2020 "
public tDate2="02/14/2020 "
public tDate3="04/02/2020 "
public tDate4="07/10/2020 "
public formsEdited=86
public irsStatus="Accepted"
public receiptId="TCCO" 
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    myTest7();
  }
}
