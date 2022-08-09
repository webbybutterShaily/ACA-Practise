import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CustomerAddEstablishmentComponent } from '../customer-add-establishment/customer-add-establishment.component'
import { MatDialog } from '@angular/material/dialog';
import { CustomersSetupService } from '../../../../../service/customers-setup.service'
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-customors',
  templateUrl: './customors.component.html',
  styleUrls: ['./customors.component.css']
})
export class CustomorsComponent implements OnInit {
  @Output() login = new EventEmitter<string>();

  name = new FormControl('');

  dropdownList = [];
  selectedItems: any = [];
  dropdownSettings = {};
  sessionvalue: any;
  currentcustomer: any;
  customername: any;
  customerid: any;
  customerDetails: any = [];
  customerName: any;
  isTemporary: boolean = false;
  editBreak: boolean = false;
  getproductlist: any = []


  check: any = []
  ACANonIntegrated: boolean = false

  check2: any = []
  ACApayrollintegrtion: boolean = false

  check3: any = []
  ACAreportingintergrated: boolean = false

  check4: any = []
  ACAfulltergrated: boolean = false

  check5: any = []
  EssentialsOnlyNonIntegrated: boolean = false

  check6: any = []
  EssentialsOnlyIntegrated: boolean = false

  check7: any = []
  EFileComplete: boolean = false

  check8: any = []
  EEOCReporting: boolean = false

  check9: any = []
  WorkNumber: boolean = false

  check10: any = []
  ACAAudit: boolean = false

  check11: any = []
  EEOCComponent2Only: boolean = false

  check12: any = []
  FullService: boolean = false

  check13: any = []
  NewJerseyEfiling: boolean = false

  check14: any = []
  WashingtonDCFiling: boolean = false

  check15: any = []
  CaliforniaEFiling: boolean = false

  check16: any = []
  RhodeIslandEFiling: boolean = false

  isaddEstablisHide: boolean = false
  constructor(
    public dialog: MatDialog,
    private customerService: CustomersSetupService,
    private http: HttpClient,
    private route: Router) {

    this.customerid = localStorage.getItem('dataSource')

  }
  CustumerData = [
    "UAT 100",
    "UAT 200"
  ]

  brand = [
    "ABC",
    "XYZ",
    "SyncStream"
  ]

  licenseType = [
    "Enterprise-Employer",
    "Enterprise- Service Provider",
    "Multi-company Child Company",
    "Multi-company Parent Company",
    "Single Company"
  ]

  group = [
    "N/A",
    "Consolidated Group",
    "Controlled Group"
  ]

  opt = [
    "N/A",
    "Yes",
    "No"
  ]
  currentDate1 = new Date;

  establishments: any

  adminlicese = [
    "None",
    "Internal",
    "External"
  ]

  customerdata: any = ''
  customerdata1: any = ''
  formdetails: any;

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

    this.getCustomerDetails();
    this.getEstablishmentsData();
    this.GetProductlist();
  }

  openDialog1() {
    const details = {
      Ein: this.customerDetails.EIN,
      isavtive: this.customerDetails.isActive
    }
    const dialogRef = this.dialog.open(CustomerAddEstablishmentComponent, {
      data: details,
      width: '1360px', height: '680px', panelClass: ["custom-style"]
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onLogin(user: any) {

    this.customerdata1 = this.customerService.getMyGV().customerId
    this.customerService
      .getcustomerdetails(this.customerdata1)
      .subscribe(
        (response) => {
          this.customerdata = response
          this.formdetails = new FormGroup({
            customerName: new FormControl(this.customerdata.customerName)
          })
        }
      )
  }

  getdata(data: any) {
    this.http.post('https://dev.api.syncstream.io/api/customer', data).subscribe((res) => {
    })
  }

  getData(): void {
    this.http
      .get<any>(
        'https://dev.api.syncstream.io/api/customer/drop-down/get-customerid-customername'
      )
      .subscribe((data) => {
        this.dropdownList = data;
      });
  }

  onItemSelect(item: any) {
    // this.login.emit(item);
    localStorage.removeItem('dataSource');
    this.customerid = item.customerid;
    sessionStorage.removeItem('CurrentCustomer');
    this.customername = item.customername;
    this.currentcustomer = sessionStorage.setItem(
      'CurrentCustomer',
      this.customername
    );

    localStorage.setItem('dataSource', this.customerid);
    window.location.reload();
  }

  getCustomerDetails() {
    this.customerService
      .GetCustomerDetails(this.customerid)
      .subscribe((result) => {
        this.customerDetails = result

        if (this.customerDetails.customerId) {
          this.isTemporary = true;
        }

        if (this.customerDetails.isSchool === false) {
          this.editBreak = true
        }
      })
  }

  getEstablishmentsData() {
    this.http
      .get<any>(`https://dev.api.syncstream.io/api/customer/child-establishments/${this.customerid}`)
      .subscribe((res) => {
        this.establishments = res
      })
  }

  goTobreakeinservice() {
    this.route.navigateByUrl('admin/breaksinservice/breakinservice')
  }

  NewCustomer() {
    this.isaddEstablisHide = true;
  }

  GetProductlist() {
    this.http.get<any>(`https://dev.api.syncstream.io/api/customer-products-licensed/${this.customerid}`)
      .subscribe((res) => {
        this.getproductlist = res

        this.getproductlist.map((data: any) => {
          if (data.productTypeId === 1 && data.status === 1) {
            var result = this.getproductlist.find((obj: { productTypeId: number; }) => {
              return obj.productTypeId === 1
            })
            this.check = result.acaAuditTaxYears
            this.ACANonIntegrated = true
          }

          if (data.productTypeId === 2 && data.status === 1) {
            var result = this.getproductlist.find((obj: { productTypeId: number; }) => {
              return obj.productTypeId === 2
            })
            this.check2 = result.acaAuditTaxYears
            this.ACApayrollintegrtion = true
          }

          if (data.productTypeId === 3 && data.status === 1) {
            var result = this.getproductlist.find((obj: { productTypeId: number; }) => {
              return obj.productTypeId === 3
            })
            this.check3 = result.acaAuditTaxYears
            this.ACAfulltergrated = true
          }

          if (data.productTypeId === 4 && data.status === 1) {
            var result = this.getproductlist.find((obj: { productTypeId: number; }) => {
              return obj.productTypeId === 4
            })
            this.check4 = result.acaAuditTaxYears
            this.ACApayrollintegrtion = true
          }
          if (data.productTypeId === 5 && data.status === 1) {
            var result = this.getproductlist.find((obj: { productTypeId: number; }) => {
              return obj.productTypeId === 5
            })
            this.check5 = result.acaAuditTaxYears
            this.EssentialsOnlyNonIntegrated = true
          }

          if (data.productTypeId === 6 && data.status === 1) {
            var result = this.getproductlist.find((obj: { productTypeId: number; }) => {
              return obj.productTypeId === 6
            })
            this.check6 = result.acaAuditTaxYears
            this.EssentialsOnlyIntegrated = true
          }

          if (data.productTypeId === 7 && data.status === 1) {
            var result = this.getproductlist.find((obj: { productTypeId: number; }) => {
              return obj.productTypeId === 7
            })
            this.check7 = result.acaAuditTaxYears
            this.EFileComplete = true
          }

          if (data.productTypeId === 8 && data.status === 1) {
            var result = this.getproductlist.find((obj: { productTypeId: number; }) => {
              return obj.productTypeId === 8
            })
            this.check8 = result.acaAuditTaxYears
            this.EEOCReporting = true
          }

          if (data.productTypeId === 9 && data.status === 1) {
            var result = this.getproductlist.find((obj: { productTypeId: number; }) => {
              return obj.productTypeId === 9
            })
            this.check9 = result.acaAuditTaxYears
            this.WorkNumber = true
          }

          if (data.productTypeId === 10 && data.status === 1) {
            var result = this.getproductlist.find((obj: { productTypeId: number; }) => {
              return obj.productTypeId === 10
            })
            this.check10 = result.acaAuditTaxYears
            this.ACAAudit = true
          }

          if (data.productTypeId === 11 && data.status === 1) {
            var result = this.getproductlist.find((obj: { productTypeId: number; }) => {
              return obj.productTypeId === 11
            })
            this.check11 = result.acaAuditTaxYears
            this.EEOCComponent2Only = true
          }

          if (data.productTypeId === 12 && data.status === 1) {
            var result = this.getproductlist.find((obj: { productTypeId: number; }) => {
              return obj.productTypeId === 12
            })
            this.check12 = result.acaAuditTaxYears
            this.FullService = true
          }

          if (data.productTypeId === 13 && result.status === 1) {
            var result = this.getproductlist.find((obj: { productTypeId: number; }) => {
              return obj.productTypeId === 13
            })
            this.check13 = result.acaAuditTaxYears
            this.NewJerseyEfiling = true
          }


          if (data.productTypeId === 14 && result.status === 1) {
            var result = this.getproductlist.find((obj: { productTypeId: number; }) => {
              return obj.productTypeId === 14
            })
            this.check14 = result.acaAuditTaxYears
            this.WashingtonDCFiling = true
          }

          if (data.productTypeId === 15 && data.status === 1) {
            var result = this.getproductlist.find((obj: { productTypeId: number; }) => {
              return obj.productTypeId === 15
            })
            this.check15 = result.acaAuditTaxYears
            this.CaliforniaEFiling = true
          }
          if (data.productTypeId === 16 && data.status === 1) {
            var result = this.getproductlist.find((obj: { productTypeId: number; }) => {
              return obj.productTypeId === 16
            })
            this.check16 = result.acaAuditTaxYears
            this.RhodeIslandEFiling = true
          }
        })
      })
  }
}


