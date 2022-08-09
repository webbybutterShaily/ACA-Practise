import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from './../app/service/cognito.service';

/**
 * This class maintains the component structure of our application
 * @class
 */
@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css'] })
export class AppComponent implements OnInit {

  /**
   * This property denotes whether a user has authenticated or not
   * @property
   * @public
   * @type {boolean}
   */
  public isAuthenticated: boolean = false;

  /**
   * This method instantiates our application component with injected dependencies
   * @param {Router} router
   * @param {CognitoService} cognitoService
   */
  constructor(

    /**
     * This property contains the instance of the application's router
     * @private
     * @property
     * @type {Router}
     */
    private router: Router,

    /**
     * This property contains the instance of our Cognito service provider
     * @private
     * @property
     * @type {CognitoService}
     */
    private cognitoService: CognitoService) { }

  /**
   * This method fires when the component is initialized
   * @async
   * @returns {Promise<void>}
   */
  public async ngOnInit(): Promise<void> {


    // Try to check for authentication with Cognito
    try {

      // Check for authentication with Cognito
      const success: boolean = await this.cognitoService.isAuthenticated();

      // Reset the flag into the instance
      this.isAuthenticated = success;
    } catch (error) {

      // Reset the flag into the instance
      this.isAuthenticated = false;
    }
  }

  /**
   * This method provides our sign-out functionality
   * @async
   * @returns {Promise<boolean>}
   */
  public async signOut(): Promise<boolean> {

    // Sign out of Cognito
    await this.cognitoService.signOut();

    // We're done, navigate to the sign-in page
    return await this.router.navigate(['/sign-in']);
  }

}
