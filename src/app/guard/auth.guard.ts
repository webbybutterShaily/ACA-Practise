import {Injectable} from '@angular/core';
import {Router, Route, CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {CognitoService} from '../service/cognito.service';
import {environment} from "../../environments/environment";

/**
 * This class maintains the guard structure for our authenticated routes
 * @class
 */
@Injectable()
export class AuthGuard implements CanActivate {

  /**
   * This method instantiates our guard with injected dependencies
   * @param {CognitoService} cognitoService
   * @param {Router} router
   */
  constructor(

    /**
     * This property contains the instance of our Cognito helper
     * @private
     * @property
     * @type {CognitoHelper}
     */
    private cognitoService : CognitoService,

    /**
     * This property contains the instance of our application's router
     * @private
     * @property
     * @type {Router}
     */
    private router : Router
  ) { }

  /**
   * This method determines whether the route can be loaded or not
   * @async
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Promise<boolean>}
   */
  public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Promise<boolean>
  {

    // Ensure the guard is enabled
    // if (!environment.guard.auth.enabled) return true;
    const data=localStorage.getItem("user")
    // Check for authentication and redirect the user to sign-in
    if (!data) {
//await this.cognitoService.isAuthenticated())
      // Redirect the user to sign-in
      await this.router.navigate(['/sign-in']);

      // We're done
      return false;
    }

    console.log('DEACTIVATING')

    // We're done, return the authentication state flag
    return true;
  }
}
