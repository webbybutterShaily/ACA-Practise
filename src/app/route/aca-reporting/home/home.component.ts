import { Component, OnInit } from '@angular/core';

/**
 * This class maintains the route component structure for our ACA Reporting home page
 * @class
 */
@Component({ selector: 'app-aca-reporting-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css'] })
export class AcaReportingHomeComponent implements OnInit {

  /**
   * This method instantiates our route component with injected dependencies
   */
  public constructor() { }

  /**
   * This method fires with the component is initialized
   * @returns {void}
   */
  public ngOnInit(): void { }
}
