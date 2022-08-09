import { CustomerDropDownComponent } from './component/customer-drop-down/customer-drop-down.component';
import { EmployerDataComponent } from './acacomponent/ACA-Audit/employer-data/employer-data.component';
import { CreateNewClientComponent } from './acacomponent/Benefits Tool Analysis/apps/create-new-client/create-new-client.component';
import { AppsComponent } from './acacomponent/Benefits Tool Analysis/apps/apps.component';
import { SingleFormAssessmentComponent } from './acacomponent/ACA-Audit/single-form-assessment/single-form-assessment.component';
import { HomePageComponent } from './acacomponent/home-page/home-page.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './route/home/home.component';
import { ProfileComponent } from './route/profile/profile.component';
import { SignInComponent } from './route/sign-in/sign-in.component';
import { AuthGuard } from './guard/auth.guard';
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
import { ListEmployeeAssignmentsComponent } from './route/aca-reporting/data/plan-assignment/list-employee-assignments/list-employee-assignments.component'
import { EmployerdataComponent } from './acacomponent/eeocreporting/employerdata/employerdata.component';
import { Eeocform1Component } from './acacomponent/eeocreporting/eeocform1/eeocform1.component';
import { EeochomeComponent } from './acacomponent/eeocreporting/eeochome/eeochome.component';
import { AdHocEditsComponent } from './route/aca-reporting/year-end-process/ad-hoc-edits/ad-hoc-edits.component';
import { AffordabilityComponent } from './route/aca-reporting/year-end-process/affordability/affordability.component';
import { AffordabilityAssignmentComponent } from './route/aca-reporting/year-end-process/affordability-assignment/affordability-assignment.component';
import { AuditComponent } from './route/aca-reporting/year-end-process/audit/audit.component';
import { CloseTaxYearComponent } from './route/aca-reporting/year-end-process/close-tax-year/close-tax-year.component';
import { DeliveryComponent } from './route/aca-reporting/year-end-process/delivery/delivery.component';
import { EFileComponent } from './route/aca-reporting/year-end-process/e-file/e-file.component';
import { PreviewFormsComponent } from './route/aca-reporting/year-end-process/preview-forms/preview-forms.component';
import { YearEndReviewComponent } from './route/aca-reporting/year-end-process/year-end-review/year-end-review.component';
import { FormRespositoryComponent } from './acacomponent/eeocreporting/eeocform1/form-respository/form-respository.component';
import { EfileTermsComponent } from './route/aca-reporting/year-end-process/e-file/efile-terms/efile-terms.component'
import { CustomorsComponent } from './route/admin/partner-admin/setups/customors/customors.component';
import { EmployeeDependentComponent } from './route/aca-reporting/data/employee-census/employee-dependent/employee-dependent.component';
import { BreaksInServiceComponent } from './route/admin/partner-admin/setups/BreaksInService/breaks-in-service/breaks-in-service.component';
import { AssignbreaksComponent } from './route/admin/partner-admin/setups/BreaksInService/assignbreaks/assignbreaks.component';
import { ListEmployeeBreaksComponent } from './route/admin/partner-admin/setups/BreaksInService/list-employee-breaks/list-employee-breaks.component';
import { W2safeComponent } from './route/aca-reporting/year-end-process/affordability/w2SafeHarborDetail/w2safe/w2safe.component'
import { RopsafeComponent } from './route/aca-reporting/year-end-process/affordability/ropSafeHarborDetail/ropsafe/ropsafe.component'
import { FplsafeComponent } from './route/aca-reporting/year-end-process/affordability/fplSafeHarborDetail/fplsafe/fplsafe.component'
import { CurrentForm1095CDataComponent } from './route/aca-reporting/year-end-process/current-form1095-cdata/current-form1095-cdata.component';
import { UpdateW2WagesComponent } from './route/aca-reporting/year-end-process/affordability/update-w2-wages/update-w2-wages.component';
import { UpdateRateOfPaysComponent } from './route/aca-reporting/year-end-process/affordability/update-rate-of-pays/update-rate-of-pays.component';
import { PrintToMailComponent } from './route/aca-reporting/year-end-process/print-to-mail/print-to-mail.component';
import { SummaryComponent } from './route/aca-reporting/year-end-process/summary/summary.component';
import { Delivery1095NavbarProccessComponent } from './route/aca-reporting/year-end-process/delivery1095-navbar-proccess/delivery1095-navbar-proccess.component';
import { PrintToMailNavbarProcessComponent } from './route/aca-reporting/year-end-process/print-to-mail-navbar-process/print-to-mail-navbar-process.component';
import { DuplicatePrintComponent } from './route/aca-reporting/year-end-process/print-to-mail/duplicate-print/duplicate-print.component';
import { CorrectionPrintComponent } from './route/aca-reporting/year-end-process/print-to-mail/correction-print/correction-print.component';
import { InitialPrintComponent } from './route/aca-reporting/year-end-process/print-to-mail/initial-print/initial-print.component';

/**
 * This constant defines the routes for the application
 * @constant
 * @type {Routes}
 */
const routes: Routes = [
  { path: 'aca-reporting', component: AcaReportingHomeComponent, canActivate: [AuthGuard] },
  { path: 'aca-reporting/', component: AcaReportingHomeComponent, canActivate: [AuthGuard] },
  { path: 'aca-reporting/home', component: AcaReportingHomeComponent, canActivate: [AuthGuard] },
  { path: 'aca-reporting/data/electronic-consent', component: AcaReportingDataElectronicConsentComponent, canActivate: [AuthGuard] },
  { path: 'aca-reporting/data/employee-census', component: AcaReportingDataEmployeeCensusComponent, canActivate: [AuthGuard] },
  { path: 'aca-reporting/data/employee-details', component: AcaReportingDataEmployeeDetailsComponent, canActivate: [AuthGuard] },
  { path: 'aca-reporting/data/offer-of-coverage', component: AcaReportingDataOfferOfCoverageComponent, canActivate: [AuthGuard] },
  { path: 'aca-reporting/data/plan-assignment', component: AcaReportingDataPlanAssignmentComponent, canActivate: [AuthGuard] },
  { path: 'aca-reporting/data/plan-builder', component: AcaReportingDataPlanBuilderComponent, canActivate: [AuthGuard] },
  { path: 'aca-reporting/e-file-complete-import', component: AcaReportingEFileCompleteImportComponent, canActivate: [AuthGuard] },
  { path: 'aca-reporting/tax-data-archive', component: AcaReportingTaxDataArchiveComponent, canActivate: [AuthGuard] },
  { path: 'aca-reporting/tax-document-repository', component: AcaReportingTaxDocumentRepositoryComponent, canActivate: [AuthGuard] },
  {
    path: 'aca-reporting/year-end-process', component: AcaReportingYearEndProcessComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'Affordability', pathMatch: 'full' },
      { path: 'Affordability', component: AffordabilityComponent },
      { path: 'AdHocEdits', component: AdHocEditsComponent },
      { path: 'AffordabilityAssignment', component: AffordabilityAssignmentComponent },
      { path: 'Audit', component: AuditComponent },
      { path: 'CloseTaxYear', component: CloseTaxYearComponent },
      { path: 'Delivery', component: DeliveryComponent },
      { path: 'EFile', component: EFileComponent },
      { path: 'PreviewForms', component: PreviewFormsComponent },
      { path: 'YearEndReview', component: YearEndReviewComponent },
      { path: 'Efile-Terms', component: EfileTermsComponent },
    ]
  },
  {
    path: 'aca-reporting/year-end-process/deliver-navabar-process', component: Delivery1095NavbarProccessComponent,
    children: [
      { path: '', redirectTo: 'Delivery', pathMatch: 'full' },
      { path: 'Delivery', component: DeliveryComponent },
      { path: 'print-to-mail', component: PrintToMailComponent },
      { path: 'summary', component: SummaryComponent },
    ]
  },
  {
    path: 'aca-reporting/year-end-process/print-to-mail-process', component: PrintToMailNavbarProcessComponent,
    children: [
      { path: '', redirectTo: 'attest', pathMatch: 'full' },
      { path: 'attest', component: PrintToMailComponent },
      { path: 'Initial-print/:taxyear', component: InitialPrintComponent },
      { path: 'correction-print/:taxyear', component: CorrectionPrintComponent },
      { path: 'duplicate-print/:taxyear', component: DuplicatePrintComponent },
    ]
  },
  { path: 'admin/partner-admin/setups/customers', component: CustomorsComponent },
  { path: 'aca-tracking', component: AcaTrackingHomeComponent, canActivate: [AuthGuard] },
  { path: 'aca-tracking/', component: AcaTrackingHomeComponent, canActivate: [AuthGuard] },
  { path: 'aca-tracking/ACATrackingHome', component: AcaTrackingHomeComponent, canActivate: [AuthGuard] },
  { path: 'aca-tracking/setup', component: AcaTrackingSetupComponent, canActivate: [AuthGuard] },
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'eeoc-reporting/emoloyer-data', component: EmployerdataComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'Home', component: HomePageComponent , canActivate: [AuthGuard]},
  { path: 'Apps', component: AppsComponent },
  { path: 'SingleFormAssessment', component: SingleFormAssessmentComponent },
  { path: 'eeoc-reporting/eeo-1-form/download-component-1-form', component: Eeocform1Component },
  { path: 'eeoc-reporting/home', component: EeochomeComponent },
  { path: "forget-password", component: ForgetPasswordComponent },
  { path: "aca-reporting/data/plan-assignment/list-employee-assignments", component: ListEmployeeAssignmentsComponent },
  { path: 'aca-reporting/year-end-process/AdHocEdits', component: AdHocEditsComponent },
  { path: 'aca-reporting/year-end-process/AffordabilityAssignment', component: AffordabilityAssignmentComponent },
  { path: 'aca-reporting/year-end-process/Audit', component: AuditComponent },
  { path: 'aca-reporting/year-end-process/CloseTaxYear', component: CloseTaxYearComponent },
  { path: 'aca-reporting/year-end-process/Delivery', component: DeliveryComponent },
  { path: 'aca-reporting/year-end-process/EFile', component: EFileComponent },
  { path: 'aca-reporting/year-end-process/PreviewForms', component: PreviewFormsComponent },
  { path: 'aca-reporting/year-end-process/YearEndReview', component: YearEndReviewComponent },
  { path: 'aca-reporting/year-end-process/current-form-1095', component: CurrentForm1095CDataComponent },
  { path: 'aca-reporting/year-end-process/deliver-navabar-process/summary', component: SummaryComponent },
  { path: 'createnewclient', component: CreateNewClientComponent },
  { path: 'Form-Respository', component: FormRespositoryComponent },
  { path: 'Employer-Data', component: EmployerDataComponent },
  { path: 'customer-drop-list', component: CustomerDropDownComponent },
  { path: 'EmployeeDependent', component: EmployeeDependentComponent },
  { path: 'w2safe', component: W2safeComponent },
  { path: 'ropsafe', component: RopsafeComponent },
  { path: 'fplsafe', component: FplsafeComponent },
  { path: 'updatew2safe', component: UpdateW2WagesComponent },
  { path: 'updateropsafe', component: UpdateRateOfPaysComponent },
  // {path:'aca-reporting/year-end-process/affordability/',component:AffordabilityComponent},

  {
    path: 'admin/breaksinservice/breakinservice', component: BreaksInServiceComponent
  },
  {
    path: 'admin/breaksinservice/assingbreaks', component: AssignbreaksComponent
  },
  {
    path: 'admin/breaksinservice/listEmployeeBreaks', component: ListEmployeeBreaksComponent
  },

  { path: '', component: SignInComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'signIn' },
];

/**
 * This class maintains the routing for our application
 * @class
 */
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule { }

