import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { MatSortModule } from '@angular/material/sort'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';
import { AdminGeneralGuard } from './guard/admin-general.guard';
import { AdminPartnerGuard } from './guard/admin-partner.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignInComponent } from './route/sign-in/sign-in.component';
import { HomeComponent } from './route/home/home.component';
import { ProfileComponent } from './route/profile/profile.component';
import { AcaReportingHomeComponent } from './route/aca-reporting/home/home.component';
import { AcaReportingDataElectronicConsentComponent } from './route/aca-reporting/data/electronic-consent/electronic-consent.component';
import { AcaReportingDataEmployeeCensusComponent } from './route/aca-reporting/data/employee-census/employee-census.component';
import { AcaReportingDataEmployeeDetailsComponent } from './route/aca-reporting/data/employee-details/employee-details.component';
import { AcaReportingDataOfferOfCoverageComponent } from './route/aca-reporting/data/offer-of-coverage/offer-of-coverage.component';
import { AcaReportingDataPlanAssignmentComponent } from './route/aca-reporting/data/plan-assignment/plan-assignment.component';
import { AcaReportingDataPlanBuilderComponent } from './route/aca-reporting/data/plan-builder/plan-builder.component';
import { AcaReportingEFileCompleteImportComponent } from './route/aca-reporting/e-file-complete-import/e-file-complete-import.component';
import { AcaReportingTaxDataArchiveComponent } from './route/aca-reporting/tax-data-archive/tax-data-archive.component';
import { AcaReportingTaxDocumentRepositoryComponent } from './route/aca-reporting/tax-document-repository/tax-document-repository.component';
import { AcaReportingYearEndProcessComponent } from './route/aca-reporting/year-end-process/year-end-process.component';
import { AcaTrackingHomeComponent } from './route/aca-tracking/home/home.component';
import { AcaTrackingSetupComponent } from './route/aca-tracking/setup/setup.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { ACAComponentComponent } from './acacomponent/acacomponent.component';
import { EeocreportingComponent } from './acacomponent/eeocreporting/eeocreporting.component';
import { EmployerdataComponent } from './acacomponent/eeocreporting/employerdata/employerdata.component';
import { MatTableModule } from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';
import { ReportselectorComponent } from './acacomponent/eeocreporting/employerdata/reportselector/reportselector.component';
import { AddestablishmentComponent } from '../app/acacomponent/eeocreporting/employerdata/addestablishment/addestablishment.component';
import { LocationsComponent } from './acacomponent/eeocreporting/employerdata/locations/locations.component';
import { HomePageComponent } from './acacomponent/home-page/home-page.component';
import { Eeocform1Component } from './acacomponent/eeocreporting/eeocform1/eeocform1.component';
import { EeochomeComponent } from './acacomponent/eeocreporting/eeochome/eeochome.component'
import { AffordabilityComponent } from './route/aca-reporting/year-end-process/affordability/affordability.component';
import { AffordabilityAssignmentComponent } from './route/aca-reporting/year-end-process/affordability-assignment/affordability-assignment.component';
import { YearEndReviewComponent } from './route/aca-reporting/year-end-process/year-end-review/year-end-review.component';
import { PreviewFormsComponent } from './route/aca-reporting/year-end-process/preview-forms/preview-forms.component';
import { AuditComponent } from './route/aca-reporting/year-end-process/audit/audit.component';
import { AdHocEditsComponent } from './route/aca-reporting/year-end-process/ad-hoc-edits/ad-hoc-edits.component';
import { DeliveryComponent } from './route/aca-reporting/year-end-process/delivery/delivery.component';
import { EFileComponent } from './route/aca-reporting/year-end-process/e-file/e-file.component';
import { CloseTaxYearComponent } from './route/aca-reporting/year-end-process/close-tax-year/close-tax-year.component';
import { YearprocessNavbarComponent } from './route/aca-reporting/year-end-process/yearprocess-navbar/yearprocess-navbar.component'
import { SingleFormAssessmentComponent } from './acacomponent/ACA-Audit/single-form-assessment/single-form-assessment.component';
import { AppsComponent } from './acacomponent/Benefits Tool Analysis/apps/apps.component';
import { IndicatorDailogComponent } from './acacomponent/ACA-Audit/indicator-dailog/indicator-dailog.component';
import { CreateNewClientComponent } from './acacomponent/Benefits Tool Analysis/apps/create-new-client/create-new-client.component';
import { FormRespositoryComponent } from './acacomponent/eeocreporting/eeocform1/form-respository/form-respository.component';
import { EmployerDataComponent } from './acacomponent/ACA-Audit/employer-data/employer-data.component';
import { PlanBuilderformComponent } from './route/aca-reporting/data/plan-builder/plan-builderform/plan-builderform.component'
import { CreateNewEmployeeDialogComponent } from './route/aca-reporting/data/employee-census/create-new-employee-dialog/create-new-employee-dialog.component'
import { AdHocBulkEditsComponent } from './route/aca-reporting/year-end-process/ad-hoc-edits/ad-hoc-bulk-edits/ad-hoc-bulk-edits.component';
import { EfileTermsComponent } from './route/aca-reporting/year-end-process/e-file/efile-terms/efile-terms.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomorsComponent } from './route/admin/partner-admin/setups/customors/customors.component';
import { CustomerDropDownComponent } from './component/customer-drop-down/customer-drop-down.component';
import { PlanBuildICHRACalculatorComponent } from './route/aca-reporting/data/plan-builder/plan-build-ichracalculator/plan-build-ichracalculator.component';
import { SingleIchraForAffordabilityComponent } from './route/aca-reporting/data/plan-builder/plan-build-ichracalculator/single-ichra-for-affordability/single-ichra-for-affordability.component';
import { CustomerAddEstablishmentComponent } from './route/admin/partner-admin/setups/customer-add-establishment/customer-add-establishment.component';
import { UploadBulkFileComponent } from './route/aca-reporting/data/plan-builder/plan-build-ichracalculator/upload-bulk-file/upload-bulk-file.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MonthcontributionComponent } from './route/aca-reporting/data/plan-builder/plan-builderform/monthcontribution/monthcontribution.component';
import { CreateOfferComponent } from './route/aca-reporting/data/offer-of-coverage/create-offer/create-offer.component';
import { EmployeeDependentComponent } from './route/aca-reporting/data/employee-census/employee-dependent/employee-dependent.component';
import { UpdateEmployeeDependentComponent } from './route/aca-reporting/data/employee-census/update-employee-dependent/update-employee-dependent.component';
import { ListEmployeeAssignmentsComponent } from './route/aca-reporting/data/plan-assignment/list-employee-assignments/list-employee-assignments.component';
import { TaxYearDropDownComponent } from './component/tax-year-drop-down/tax-year-drop-down.component'
import { RemovePlanComponent } from './route/aca-reporting/data/plan-assignment/list-employee-assignments/remove-plan/remove-plan.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AcaReportingConfirmEmployeeDialogComponent } from './route/aca-reporting/data/plan-assignment/confirm-employee-dialog/confirm-employee-dialog.component';
import { AcaReportingSaveDataDialogComponent } from './route/aca-reporting/data/plan-assignment/save-data-dialog/save-data-dialog.component';
import { SortDirective } from './directive/sort.directive';
import { FilterOptionComponent } from './filter-option/filter-option.component';
import { NgSelectModule } from '@ng-select/ng-select';

import { EditEmployeePageCensusComponent } from './route/aca-reporting/data/employee-census/edit-employee-page-census/edit-employee-page-census.component';
import { ReConfirmPlanComponent } from './route/aca-reporting/data/plan-assignment/remove-ConfirmPlan/re-confirm-plan/re-confirm-plan.component';
import { ErrorModalComponent } from './route/aca-reporting/data/plan-assignment/Error-modal/error-modal/error-modal.component';
import { CensusConformationComponent } from './route/aca-reporting/data/employee-census/census-conformation/census-conformation.component';

// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {DatePipe} from '@angular/common';
import { BreaksInServiceComponent } from './route/admin/partner-admin/setups/BreaksInService/breaks-in-service/breaks-in-service.component';
import { AddnewbreakComponent } from './route/admin/partner-admin/setups/BreaksInService/addnewbreak/addnewbreak.component';
import { AssignbreaksComponent } from './route/admin/partner-admin/setups/BreaksInService/assignbreaks/assignbreaks.component';
import { ListEmployeeBreaksComponent } from './route/admin/partner-admin/setups/BreaksInService/list-employee-breaks/list-employee-breaks.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { KnowledgeBaseButtonComponent } from './knowledge-baseButton/knowledge-base-button/knowledge-base-button.component'
import { NgChartsModule } from 'ng2-charts';
import { W2safeComponent } from './route/aca-reporting/year-end-process/affordability/w2SafeHarborDetail/w2safe/w2safe.component';
import { RopsafeComponent } from './route/aca-reporting/year-end-process/affordability/ropSafeHarborDetail/ropsafe/ropsafe.component';
import { FplsafeComponent } from './route/aca-reporting/year-end-process/affordability/fplSafeHarborDetail/fplsafe/fplsafe.component';


import { DeleteConfomationComponent } from './route/admin/partner-admin/setups/BreaksInService/delete-confomation/delete-confomation.component';
import { CurrentForm1095CDataComponent } from './route/aca-reporting/year-end-process/current-form1095-cdata/current-form1095-cdata.component';
import { DoughnutChartComponent } from './route/aca-reporting/year-end-process/doughnut-chart/doughnut-chart.component';
import { UpdateW2WagesComponent } from './route/aca-reporting/year-end-process/affordability/update-w2-wages/update-w2-wages.component';
import { UpdateRateOfPaysComponent } from './route/aca-reporting/year-end-process/affordability/update-rate-of-pays/update-rate-of-pays.component'
import { Delivery1095NavbarComponent } from './route/aca-reporting/year-end-process/delivery1095-navbar/delivery1095-navbar.component';
import { PrintToMailComponent } from './route/aca-reporting/year-end-process/print-to-mail/print-to-mail.component';
import { SummaryComponent } from './route/aca-reporting/year-end-process/summary/summary.component';
import { Delivery1095NavbarProccessComponent } from './route/aca-reporting/year-end-process/delivery1095-navbar-proccess/delivery1095-navbar-proccess.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSelectFilterModule } from 'mat-select-filter';


import { NewEmailTemplateComponent } from './route/aca-reporting/year-end-process/new-email-template/new-email-template.component';
import { InitialPrintComponent } from './route/aca-reporting/year-end-process/print-to-mail/initial-print/initial-print.component';
import { CorrectionPrintComponent } from './route/aca-reporting/year-end-process/print-to-mail/correction-print/correction-print.component';
import { DuplicatePrintComponent } from './route/aca-reporting/year-end-process/print-to-mail/duplicate-print/duplicate-print.component';
import { PrintToMailNavbarComponent } from './route/aca-reporting/year-end-process/print-to-mail-navbar/print-to-mail-navbar.component';
import { PrintToMailNavbarProcessComponent } from './route/aca-reporting/year-end-process/print-to-mail-navbar-process/print-to-mail-navbar-process.component'
/**
 * This class maintains the module structure of our application
 * @class
 */
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignInComponent,
    HomeComponent,
    ProfileComponent,
    AcaReportingHomeComponent,
    AcaReportingDataElectronicConsentComponent,
    AcaReportingDataEmployeeCensusComponent,
    AcaReportingDataEmployeeDetailsComponent,
    AcaReportingDataOfferOfCoverageComponent,
    AcaReportingDataPlanAssignmentComponent,
    AcaReportingDataPlanBuilderComponent,
    AcaReportingEFileCompleteImportComponent,
    AcaReportingTaxDataArchiveComponent,
    AcaReportingTaxDocumentRepositoryComponent,
    AcaReportingYearEndProcessComponent,
    AcaTrackingHomeComponent,
    AcaTrackingSetupComponent,
    ForgetPasswordComponent,
    ACAComponentComponent,
    EeocreportingComponent,
    EmployerdataComponent,
    ReportselectorComponent,
    AddestablishmentComponent,
    LocationsComponent,
    HomePageComponent,
    Eeocform1Component,
    EeochomeComponent,
    SingleFormAssessmentComponent,
    AffordabilityComponent,
    AffordabilityAssignmentComponent,
    YearEndReviewComponent,
    PreviewFormsComponent,
    AuditComponent,
    AdHocEditsComponent,
    DeliveryComponent,
    EFileComponent,
    CloseTaxYearComponent,
    YearprocessNavbarComponent,
    AppsComponent,
    IndicatorDailogComponent,
    CreateNewClientComponent,
    FormRespositoryComponent,
    EmployerDataComponent,
    PlanBuilderformComponent,
    CreateNewEmployeeDialogComponent,
    AdHocBulkEditsComponent,
    EfileTermsComponent,
    CustomorsComponent,
    CustomerDropDownComponent,
    PlanBuildICHRACalculatorComponent,
    SingleIchraForAffordabilityComponent,
    CustomerAddEstablishmentComponent,
    UploadBulkFileComponent,
    MonthcontributionComponent,
    CreateOfferComponent,
    EmployeeDependentComponent,
    UpdateEmployeeDependentComponent,
    ListEmployeeAssignmentsComponent,
    RemovePlanComponent,
    TaxYearDropDownComponent,
    AcaReportingConfirmEmployeeDialogComponent,
    AcaReportingSaveDataDialogComponent,
    SortDirective,
    FilterOptionComponent,
    EditEmployeePageCensusComponent,
    ReConfirmPlanComponent,
    ErrorModalComponent,
    CensusConformationComponent,
    BreaksInServiceComponent,
    AddnewbreakComponent,
    AssignbreaksComponent,
    ListEmployeeBreaksComponent,
    KnowledgeBaseButtonComponent,
    W2safeComponent,
    RopsafeComponent,
    FplsafeComponent,
    DeleteConfomationComponent,
    CurrentForm1095CDataComponent,
    DoughnutChartComponent,
    UpdateW2WagesComponent,
    UpdateRateOfPaysComponent,
    Delivery1095NavbarComponent,
    PrintToMailComponent,
    SummaryComponent,
    Delivery1095NavbarProccessComponent,
    NewEmailTemplateComponent,
    InitialPrintComponent,
    CorrectionPrintComponent,
    DuplicatePrintComponent,
    PrintToMailNavbarComponent,
    PrintToMailNavbarProcessComponent

    
    
  
  ],
  imports: [
    // AngularFontAwesomeModule,
    MatSortModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatOptionModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
    MatTabsModule,
    MatExpansionModule,
    HttpClientModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    NgSelectModule,
    FontAwesomeModule,
    NgChartsModule,
    MatAutocompleteModule,
    MatSelectFilterModule
    
  ],
  providers: [AuthGuard, AdminGuard, AdminGeneralGuard, AdminPartnerGuard,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }



