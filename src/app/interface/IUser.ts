/**
 * This interface maintains the structure of a user
 * @interface
 */
export default interface IUser {

  /**
   * This property contains the MFA code for the user
   * @property
   * @public
   * @type {string}
   */
  code: string;

  /**
   * This property contains the user's email address
   * @property
   * @public
   * @type {string}
   */
  email: string;

  /**
   * This property contains the user's name
   * @property
   * @public
   * @type {string}
   */
  name: string;

  /**
   * This property contains the user's password
   * @property
   * @public
   * @type {string}
   */
  password: string;

  /**
   * This property denotes whether to show the user's password or not
   * @property
   * @public
   * @type {boolean}
   */
  showPassword: boolean;
}
