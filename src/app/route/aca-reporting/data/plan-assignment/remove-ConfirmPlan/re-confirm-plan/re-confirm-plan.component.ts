import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlanserviceService } from 'src/app/service/planservice.service';
import { AcaReportingSaveDataDialogComponent } from '../../save-data-dialog/save-data-dialog.component';




@Component({
  selector: 'app-re-confirm-plan',
  templateUrl: './re-confirm-plan.component.html',
  styleUrls: ['./re-confirm-plan.component.css']
})



export class ReConfirmPlanComponent implements OnInit {
    public constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private planservice:PlanserviceService) { }
    

    planData:any
    empData: any
    public ngOnInit(): void {
      this.empData=this.data.empList
        // this.empData = this.data.empData
        this.planData = this.data.planData
    }
 removeData(){
  let req ={
    

      customerId: localStorage.getItem('dataSource') , 
    
      planName: this.planData.planName,
    
      planRenewalDate: this.planData.planRenewalDate, 
    
      employeeIds:this.empData 
    
    
  }
  this.planservice.remove(req).subscribe(res=>{
    console.log(res)
  })
 }
   
}