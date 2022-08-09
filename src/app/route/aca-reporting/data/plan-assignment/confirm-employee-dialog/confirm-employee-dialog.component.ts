import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AcaReportingSaveDataDialogComponent } from '../save-data-dialog/save-data-dialog.component';
@Component({
    selector: 'app-aca-reporting-confirm-employee-dialog',
    templateUrl: './confirm-employee-dialog.component.html',
    styleUrls: ['./confirm-employee-dialog.component.css'],
})

export class AcaReportingConfirmEmployeeDialogComponent implements OnInit {
    public constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

    empData: any
    public ngOnInit(): void {
        this.empData = this.data.empList
    }

    openAddData() {
        const dialogRef = this.dialog.open(AcaReportingSaveDataDialogComponent, {
            width: '600px',
            data: {
                empData: this.empData,
                planData: this.data.planData
            },
            panelClass: ["custom-style"]
        });

        dialogRef.afterClosed().subscribe(result => {
        });
    }
}