import { Component, OnInit } from '@angular/core';
import { CognitoService } from '../../service/cognito.service';
import IUser from '../../interface/IUser';

/**
 * This class maintains the route component structure for a user's profile page
 * @class
 */
@Component({ selector: 'app-profile', templateUrl: './profile.component.html', styleUrls: ['./profile.component.css'] })
export class ProfileComponent implements OnInit {

  /**
   * This property contains the loading flag
   * @property
   * @public
   * @type {boolean}
   */
  public loading: boolean = false;

  /**
   * This property contains the current user being updated
   * @property
   * @public
   * @type {IUser}
   */
  public user: IUser = ({} as IUser);

  /**
   * This method instantiates our route component with injected dependencies
   * @param {CognitoService} cognitoService
   */
  constructor(

    /**
     * This property contains the instance of our Cognito service provider
     * @private
     * @property
     * @type {CognitoService}
     */
    private cognitoService: CognitoService
  ) { }

  /**
   * This method fires when the route component is initialized
   * @async
   * @returns {Promise<void>}
   */
  public async ngOnInit(): Promise<void> {

    // Set the user into the instance
    this.user = (await this.cognitoService.getUser())?.attributes;
  }

  /**
   * This method updates a user in Cognito
   * @async
   * @returns {Promise<void>}
   */
  public async update(): Promise<void> {

    // Reset the loading flag
    this.loading = true;

    // Try to update the user in Cognito
    try {

      // Update the user in Cognito
      await this.cognitoService.updateUser(this.user);
    } finally {

      // Reset the loading flag
      this.loading = false;
    }
  }
}
