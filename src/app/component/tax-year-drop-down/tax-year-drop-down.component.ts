import { Component, OnInit } from '@angular/core';
import { YearendserviceService } from 'src/app/service/yearendservice.service';

@Component({
  selector: 'app-tax-year-drop-down',
  templateUrl: './tax-year-drop-down.component.html',
  styleUrls: ['./tax-year-drop-down.component.css']
})
export class TaxYearDropDownComponent implements OnInit {
  taxyear:any
  public customerId1:any
  defaltTaxyear : any
  sessionvalue: any;
  selectedItems: any = [];
  dropdownList = ["2013","2014","2015","2016","2017","2018","2019","2020","2020","2021","2022","2023"];
  dropdownSettings = {};
  customerService: any;
  login: any;
  selected: any;
  customername: any;
  customerid: any;
  filteredList5 = this.dropdownList.slice();
  constructor(private yearservice:YearendserviceService,) { 
    
  }

  ngOnInit(): void {
    // this.ByDefaultTaxyear();
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'customerid',
      textField: 'customername',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.sessionvalue = sessionStorage.getItem('CurrentTaxYear');
    this.selectedItems.push(this.sessionvalue);
    this.selected=this.sessionvalue
  }

  ByDefaultTaxyear(){
    this.defaltTaxyear = sessionStorage.getItem('CurrentTaxYear')
    this.taxyear=this.defaltTaxyear
  }

  onItemSelect(item: any){
    // localStorage.removeItem('dataSource');
    this.yearservice.setCustYear(item);
    
    this.yearservice.setData(item);
    sessionStorage.setItem('CurrentTaxYear',item)
    window.location.reload();


   }
}
function item(item: any) {
  throw new Error('Function not implemented.');
}

