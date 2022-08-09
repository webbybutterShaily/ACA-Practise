import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Amplify, { Auth } from 'aws-amplify';
import { environment } from '../../environments/environment';
import IUser from '../interface/IUser';

/**
 * This class maintains the service structure for our Cognito interface
 * @class
 */
@Injectable({ providedIn: 'root' })
export class CognitoService {

  /**
   * This property contains the authentication subject for maintains authentication with Cognito
   * @private
   * @property
   * @type {BehaviorSubject<any>}
   */
  private authenticationSubject: BehaviorSubject<any>;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  /**
   * This method instantiates our service with injected dependencies
   */
  public constructor() {

    // Configure our Amplify client
    Amplify.configure({
      Auth: environment.cognito,
    });

    // Set the default authentication subject into the instance
    this.authenticationSubject = new BehaviorSubject<boolean>(false);
  }

  /**
   * This method confirms the sign-up of a user within Cognito
   * @async
   * @param {IUser} user
   * @returns {Promise<any>}
   */
  public confirmSignUp(user: IUser): Promise<any> {
    return Auth.confirmSignUp(user.email, user.code);
  }

  /**
   * This method retrieves the authenticated user's information from the session
   * @async
   * @returns {Promise<any>}
   */
  public getUser(): Promise<any> {

    // We're done, return the current user's information
    console.log('Auth.currentUserInfo()',Auth.currentUserInfo())
    return Auth.currentUserInfo();
  }

  /**
   * This method determines whether a Cognito authentication exists currently
   * @async
   * @returns {Promise<boolean>}
   */
  public async isAuthenticated(): Promise<boolean> {

    // Check the value of our authentication subject and resolve the promise
    if (this.authenticationSubject.value) return true;

    // Try to load the user's information from Cognito
    try {

      // Load the user's information from Cognito
      const user: any = await this.getUser();
      console.log("user check",user)
      // Check for a user
      if (!user) return false;

      // We're done, there is an authenticated user
      return false;
    } catch (error) {

      // We're done, we can't determine whether authentication exists or not
      return false;
    }
  }

  /**
   * This method signs a user in and creates an authentication token with Cognito
   * @async
   * @param {IUser} user
   * @returns {Promise<any>}
   */
  public async signIn( user: IUser): Promise<any> {

    // Sign the user into Cognito
    // await Auth.signIn(user.email, user.password);

    // Reset the authentication subject
    this.loggedIn.next(true);
    this.authenticationSubject.next(true);
  }

  public async setNavbar( ): Promise<any> {

    // Sign the user into Cognito
    // await Auth.signIn(user.email, user.password);

    // Reset the authentication subject
    this.loggedIn.next(false);
  }

  /**
   * This method signs a user out of Cognito
   * @async
   * @returns {Promise<any>}
   */
  public async signOut(): Promise<any> {

    // Sign the user out from Cognito
    await Auth.signOut();

    // Reset the authentication subject
    this.authenticationSubject.next(false);
  }

  /**
   * This method handles sign-up with Cognito
   * @async
   * @param {IUser} user
   * @returns {Promise<ISignUpResult>}
   */
  public signUp(user: IUser): Promise<any> {

    // We're done, execute the sign-up request
    return Auth.signUp({ username: user.email, password: user.password });
  }

  /**
   * This method updates a user's information in Cognito
   * @async
   * @param {IUser} user
   * @returns {Promise<any>}
   */
  public async updateUser(user: IUser): Promise<any> {

    // Localize our user from Cognito
    const cognitoUser = await Auth.currentUserPoolUser();

    // Update the user's details in cognito
    return await Auth.updateUserAttributes(cognitoUser, user);
  }
}

