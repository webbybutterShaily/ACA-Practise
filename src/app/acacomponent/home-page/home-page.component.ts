import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SignServiceService } from 'src/app/service/sign-service.service';
export interface PeriodicElement {
  name: string;
  position: number;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: ''},
 
];
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor( private signService:SignServiceService) { }

  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  customerId:any
  customerName:any
  personData:any
  tog:boolean=true
  editId: any;
  ngOnInit(): void {

    let custN = localStorage.getItem("CurrentCustomerName")
    this.customerName = custN
    let customerId = localStorage.getItem("dataSource")
    this.customerId = customerId
   this.showData()
   this.toggle()
  }

  showData(){
    this.signService.getData(this.customerId).subscribe(res=>{
      console.log("helllllllloooooooooooooooooooo",res)
       this.personData = res
       console.log(this.personData.customerId)
    })
  }
  toggle(){
    
    console.log(this.personData)
    this.tog = !this.tog
  }

}
