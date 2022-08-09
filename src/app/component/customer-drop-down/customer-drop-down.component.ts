import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { input } from 'aws-amplify';
import { CustomersSetupService } from '../../service/customers-setup.service';
@Component({
  selector: 'app-customer-drop-down',
  templateUrl: './customer-drop-down.component.html',
  styleUrls: ['./customer-drop-down.component.css'],
})
export class CustomerDropDownComponent implements OnInit {
  customername: any;
  tmp: any = [];
  dropdownList: any = [];
  dropdownSettings = {};
  public company: any = [];
  trakringstupdata: any;
  customerid: any;
  companyselect: any = false;
  sessionvalue: any;
  currentcustomer: any;
  selectedItems: any = [];
  dataCust: any = [];
  filteredList5: any = [];
  selected: any;

  
  @Output() login = new EventEmitter<string>();

  constructor(
    private http: HttpClient,
    private customerService: CustomersSetupService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'customerid',
      textField: 'customername',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.sessionvalue = sessionStorage.getItem('CurrentCustomer');
    this.selectedItems.push(this.sessionvalue);

    this.selected = this.sessionvalue;
  }

  getData(): void {
    this.http
      .get<any>(
        'https://dev.api.syncstream.io/api/customer/drop-down/get-customerid-customername'
      )
      .subscribe((data) => {
        this.dropdownList = data;
        this.filteredList5 = this.dropdownList.slice();

        console.log('name:', this.dropdownList);
      });
  }

  

  onItemSelect(item: any) {
    console.log('hi', item);
    localStorage.removeItem('dataSource');

    let objVal = this.dropdownList.filter(
      (val: any) => val.customername == item
    );

    console.log(objVal);

    this.customerService.setMyGV(objVal[0]);
    this.login.emit(objVal[0]);
    this.companyselect = true;
    localStorage.setItem('companyselect', this.companyselect);
    this.customername = objVal[0].customername;
    this.customerid = objVal[0].customerid;

    this.customerService.setData(this.customername);
    this.customerService.setId(this.customerid);

    this.currentcustomer = sessionStorage.setItem(
      'CurrentCustomer',
      this.customername
    );

    window.location.reload();

    localStorage.setItem('dataSource', this.customerid);
    localStorage.setItem('CurrentCustomerName', this.customername);
    this.customerService
      .getTrackinfDetails(item.customerid)
      .subscribe((res) => {
        this.trakringstupdata = res;
        this.customerService.settrackingd({
          customerId: this.trakringstupdata.customerId,
          customerTrackingId: this.trakringstupdata.customerTrackingId,
          hourlyEmplAdminPeriod: this.trakringstupdata.hourlyEmplAdminPeriod,
          hourlyEmplMeasurementPeriod:
            this.trakringstupdata.hourlyEmplMeasurementPeriod,
          hourlyEmplMeasurementPeriodStartDate:
            this.trakringstupdata.hourlyEmplMeasurementPeriodStartDate,
          isSetupLocked: this.trakringstupdata.isSetupLocked,
          newHourlyEmplMeasurementPeriod:
            this.trakringstupdata.newHourlyEmplMeasurementPeriod,
          newHourlyEmplMeasurementPeriodourlyEmplAdminPeriod:
            this.trakringstupdata.newHourlyEmplMeasurementPeriod,
          newHourlyEmplMeasurementPeriodStartDate:
            this.trakringstupdata.newHourlyEmplMeasurementPeriodStartDate,
          salEmplAdminPeriod: this.trakringstupdata.salEmplAdminPeriod,
          salEmplMeasurementPeriod:
            this.trakringstupdata.salEmplMeasurementPeriod,
          salEmplMeasurementStartDate:
            this.trakringstupdata.salEmplMeasurementStartDate,
          useSalariedSettingsForHourly:
            this.trakringstupdata.useSalariedSettingsForHourly,
        });
      });
  }
}
