import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlanserviceService } from 'src/app/service/planservice.service';
@Component({
    selector: 'app-aca-reporting-save-data-dialog',
    templateUrl: './save-data-dialog.component.html',
    styleUrls: ['./save-data-dialog.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AcaReportingSaveDataDialogComponent implements OnInit {
    public constructor(@Inject(MAT_DIALOG_DATA) public parentData: any, public planService: PlanserviceService,) { }

    empData: any
    planData: any
    validationMsg = ''
    ngSelect = 'Offered'
    //    event1 = new Date(dataa.dateOfOffer);

    public ngOnInit(): void {

        this.empData = this.parentData.empData
        this.planData = this.parentData.planData
        console.log(this.parentData.empData)
    }
    saveoffer(data: any) {
        data.dateOfOffer = moment(data.dateOfOffer).format('MM/DD/YYYY')
        data.enrollmentDate = moment(data.enrollmentDate).format('MM/DD/YYYY')


        let req: any = []

        this.empData.map((item: any) => {
            let redObj = {
                customerId: localStorage.getItem('dataSource'),
                employeeId: item,
                planName: this.planData.planName,
                planRenewalDate: this.planData.planRenewalDate,
                dateOfOffer: data.dateOfOffer,
                outcomeOfOffer: data.outcomeOfOffer,
                enrollmentDate: data.enrollmentDate,
                disenrollmentDate: null,
                highestLevelOfCoverageOffered: 0,
                lowestCostEEContributionForSelfOnlyCoverage: 0
            }

            req.push(redObj)
        })

        this.planService.savePlanAssignment(req).subscribe((res: any) => {
            console.log(res)
        })
        console.log(data)
    }
    funs1(data: any) {
        var d1, d2
        if (data.enrollmentDate) {
            d1 = new Date(data.enrollmentDate)
        }
        if (data.dateOfOffer) {
            d2 = new Date(data.dateOfOffer)
        }

        if (d2 && d1) {
            if (d2 <= d1) {
                this.validationMsg = ''
            }
            else {
                this.validationMsg = 'Date of Offer must be on or before Enrollment date.'
            }
        }




    }
    skipOffer(data: any) {
        data.dateOfOffer = '01-01-1900'
        data.outcomeOfOffer = 'Offered'
        data.enrollmentDate = '01-01-1900'
        let req: any = []

        this.empData.map((item: any) => {
            let redObj = {
                customerId: localStorage.getItem('dataSource'),
                employeeId: item,
                planName: this.planData.planName,
                planRenewalDate: this.planData.planRenewalDate,
                dateOfOffer: data.dateOfOffer,
                outcomeOfOffer: data.outcomeOfOffer,
                enrollmentDate: data.enrollmentDate,
                disenrollmentDate: null,
                highestLevelOfCoverageOffered: 0,
                lowestCostEEContributionForSelfOnlyCoverage: 0
            }

            req.push(redObj)
        })

        this.planService.savePlanAssignment(req).subscribe((res: any) => {
            console.log(res)
        })



    }
}