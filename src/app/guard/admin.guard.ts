import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {CognitoService} from '../service/cognito.service';
import {environment} from "../../environments/environment";

/**
 * This class maintains the guard structure for administrative privileges
 */
@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {

  /**
   * This method instantiates our guard with injected dependencies
   * @param {CognitoService} cognitoService
   */
  public constructor(

    /**
     * This property contains the instance of our cognito service provider
     * @private
     * @property
     * @type {CognitoService}
     */
    private readonly cognitoService: CognitoService,

    /**
     * This property contains the instance of our router
     * @private
     * @property
     * @type {Router}
     */
    private readonly router: Router
  ) {
  }

  /**
   * This method determines if the route can be activated or not
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Promise<boolean>}
   */
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    // Ensure the guard is enabled
    if (!environment.guard.admin.enabled) return Promise.resolve<boolean>(true);

    /**
     * TODO - Create an determinant to figure out if the user is an administrator
     */

    // We're done, let them pass
    return Promise.resolve<boolean>(true);
  }
}
