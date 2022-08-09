import { Component, OnInit } from '@angular/core';

/**
 * This class maintains the route component structure for the ACA Tracking home page
 * @class
 */
@Component({ selector: 'app-aca-tracking-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css'] })
export class AcaTrackingHomeComponent implements OnInit {
  isshown1:boolean=false
  isshown2:boolean=false
  isDisabled: boolean = true;
  /**
   * This method instantiates our route component with injected dependencies
   */
  public constructor() { }

  /**
   * This method fires when the route component is initialized
   * @returns {void}
   */
  public ngOnInit(): void { }

  toggel1(){
    this.isshown1=!this.isshown1;
  }
  toggel2(){
    this.isshown2=!this.isshown2;
  }
edit(){
  this.isDisabled=!this.isDisabled
}


}
