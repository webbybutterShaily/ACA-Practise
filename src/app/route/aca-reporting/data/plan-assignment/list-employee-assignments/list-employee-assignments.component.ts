import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {RemovePlanComponent} from './remove-plan/remove-plan.component'
@Component({
  selector: 'app-list-employee-assignments',
  templateUrl: './list-employee-assignments.component.html',
  styleUrls: ['./list-employee-assignments.component.css']
})
export class ListEmployeeAssignmentsComponent implements OnInit {
  customerName:any
  list:any=[]
  name:any=''
  customerId:any =null
member:any=[]
  constructor(private route:Router,private http: HttpClient,public dialog: MatDialog) {
    // const navigation = this.route.getCurrentNavigation();
    
    // console.log(navigation)
    const navigation = this.route.getCurrentNavigation()?.extras.state ;
  this.customerName=navigation
    console.log("navigation",navigation);
   }

  ngOnInit(): void {
    this.customerId=localStorage.getItem('dataSource')
      this.http.get(`https://dev.api.syncstream.io/api/employee-coverage-offers/get-coverage-with-employee/with-employee-data/${this.customerId}`).subscribe(res=>{
        this.list=res
        console.log(res)
      })
  }
  openDialog() {
    
   
  }
  getName(){
    this.http.get(`https://dev.api.syncstream.io/api/customer`).subscribe(res=>{
      console.log(res)
      this.name= res
    })
  }
  removebtn(member:any){
    var result= confirm(`Are you sure you wish to remove plan${member.planname} from ${member.employeename} ?`)
    if(result==true){
      var planRenewalDate=member.planRenewalDate.replace(/\//g, "-");
      var dateOfOffer=member.dateOfOffer.replace(/\//g, "-");
      this.http.delete(`https://dev.api.syncstream.io/api/employee-coverage-offers/${member.customerid}/${member.employeeid}/${member.planname}/${planRenewalDate}/${dateOfOffer} `).subscribe(res=>{
      console.log("deleted",res)
      // this.list=res
    })
   
    }
    
    console.log(member)
  }

}
