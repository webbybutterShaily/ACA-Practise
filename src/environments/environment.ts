// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {

  /**
   * This property denotes a production environment
   * @property
   * @public
   * @type {boolean}
   */
  production: false,

  /**
   * This property contains the cognito user pool details
   * @property
   * @public
   * @type {{userPoolId: string; userPoolWebClientId: string}}
   */
  cognito: {

    /**
     * This property contains the user pool ID
     * @property
     * @public
     * @type {string}
     */
    userPoolId: 'us-east-2_pptCj2gqV',

    /**
     * This property contains the user pool web client ID
     * @property
     * @public
     * @type {string}
     */
    userPoolWebClientId: '1452opnjll0ldmocs201b1oimu',
  },

  /**
   * This property contains the toggles and settings for the route guards
   * @property
   * @public
   * @type {{ [key: string]: { enabled: boolean }; }}
   */
  guard: {

    /**
     * This property contains the general authentication guard settings
     * @property
     * @public
     * @typ {{auth: { enabled: boolean; }}}
     */
    auth: { enabled: true },

    /**
     * This property contains the administrator guard settings
     * @property
     * @public
     * @type {{admin: { enabled: boolean; }}}
     */
    admin: { enabled: false },

    /**
     * This property contains the general administrator guard settings
     * @property
     * @public
     * @type {{adminGeneral: { enabled: boolean; }}}
     */
    adminGeneral: { enabled: false },

    /**
     * This property contains the partner administrator guard settings
     * @property
     * @public
     * @type {{adminPartner: { enabled: boolean; }}
     */
    adminPartner: { enabled: false }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
