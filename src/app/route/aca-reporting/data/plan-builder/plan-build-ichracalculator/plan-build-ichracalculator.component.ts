import { UploadBulkFileComponent } from './upload-bulk-file/upload-bulk-file.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SingleIchraForAffordabilityComponent } from './single-ichra-for-affordability/single-ichra-for-affordability.component';
import { CustomersSetupService } from 'src/app/service/customers-setup.service';


@Component({
  selector: 'app-plan-build-ichracalculator',
  templateUrl: './plan-build-ichracalculator.component.html',
  styleUrls: ['./plan-build-ichracalculator.component.css']
})
export class PlanBuildICHRACalculatorComponent implements OnInit {

  constructor(private dialog: MatDialog, private customerService: CustomersSetupService, @Inject(MAT_DIALOG_DATA) public data: string) { }
  selected: any;
  ngOnInit(): void {
  
  }
  openDialog() {
    const dialogRef = this.dialog.open(SingleIchraForAffordabilityComponent, {
      id: "pop1",
      data: this.data
    });

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }

  selectValue(getId: any) {
    this.selected = getId;
  }

  openDialog1() {
    console.log(this.selected)
    if (this.selected == 1) {
      this.openDialog();
    }
    if (this.selected == 2) {
      const dialogRef = this.dialog.open(UploadBulkFileComponent, {
        id: "pop2"
      });
      dialogRef.afterClosed().subscribe((result: any) => {
      });
    }

  }

}
