import { CognitoService } from './../../service/cognito.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * This class maintains the component structure for our application's footer
 * @class
 */
@Component({ selector: 'app-footer', templateUrl: './footer.component.html', styleUrls: ['./footer.component.css'] })
export class FooterComponent implements OnInit {
  isLoggedIn!: Observable<boolean>;

  /**
   * This property contains the current date
   * @property
   * @public
   * @type {Date}
   */
  public now: Date = new Date;

  /**
   * This method instantiates our component with injected dependencies
   */
  public constructor(private CognitoService:CognitoService) { }

  /**
   * This method fires when the component is initialized
   * @returns {void}
   */
  public ngOnInit(): void { 
    this.isLoggedIn = this.CognitoService.isLoggedIn;
    // this.CognitoService.setNavbar()

  }
}
