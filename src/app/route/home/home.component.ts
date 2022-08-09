import { Component, OnInit } from '@angular/core';

/**
 * This class maintains the route component for the dashboard or home page
 * @class
 */
@Component({ selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css'] })
export class HomeComponent implements OnInit {

  /**
   * This method instantiates our route component with injected dependencies
   */
  public constructor() { }

  /**
   * This method fires when the component is initialized
   * @returns {void}
   */
  public ngOnInit(): void { }

}
