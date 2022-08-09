import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportselector',
  templateUrl: './reportselector.component.html',
  styleUrls: ['./reportselector.component.css']
})
export class ReportselectorComponent implements OnInit {

  constructor() { }
  public v2:any=['a','b','c']
  public v3:any=['a1','b2','c2']
  public v1 :any
  public n:any=0
  public selectedvalue:any
  public selectedvalue1:any
  public selectedvalue2:any
  public selectedvalue3:any
  public arr:any=[]
  public username: string = '';
  ngOnInit(): void {
    
    
   
  }
  
  
}
