import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomersSetupService } from 'src/app/service/customers-setup.service';

@Component({
  selector: 'app-update-employee-dependent',
  templateUrl: './update-employee-dependent.component.html',
  styleUrls: ['./update-employee-dependent.component.css']
})
export class UpdateEmployeeDependentComponent implements OnInit {
  dateOfBirth: any
  dependentName: any
  dependentFirstName: any
  dependentMiddleName: any
  dependentLastName: any
  dependentSSN: any
  relationship: any
  employeeId: any
  customerId: any


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private customerservice: CustomersSetupService) { }

  ngOnInit(): void {
    this.employeeId = this.data.Employee_id

    const results = this.data.Emp_data.filter((x: { employeeId: any; }) => x.employeeId === this.data.Employee_id)
   this.customerId = results[0].customerId
   this.dependentName = results[0].dependentName
   this.dependentFirstName = results[0].dependentFirstName
   this.dependentMiddleName = results[0].dependentMiddleName
   this.dependentLastName = results[0].dependentLastName
   this.dependentSSN = results[0].dependentSSN
   this.relationship = results[0].relationship
    this.dateOfBirth = results[0].dateOfBirth
  }
  upadateDependent() {
    let update;
    update = {
      customerId: this.customerId,
      employeeId: this.employeeId,
      dependentName: this.dependentName,
      dependentSSN: this.dependentSSN,
      relationship: this.relationship,
      dateOfBirth: this.dateOfBirth,
      dependentFirstName: this.dependentFirstName,
      dependentMiddleName: this.dependentMiddleName,
      dependentLastName: this.dependentLastName

    }
    this.customerservice.upadateEmployeeDepent(update).subscribe((res) => {
      this.dependentName = '';
      this.dependentFirstName =''; 
      this.dependentMiddleName = '';
      this.dependentLastName = '';
      this.dependentSSN = '';
      this.relationship = ''; 
      this.dateOfBirth = '';
    })
  }

}
