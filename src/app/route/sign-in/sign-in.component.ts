import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from '../../service/cognito.service';
import IUser from '../../interface/IUser';

/**
 * This class maintains the route component structure for authenticating users
 * @class
 */
@Component({ selector: 'app-sign-in', templateUrl: './sign-in.component.html', styleUrls: ['./sign-in.component.css'] })
export class SignInComponent implements OnInit {
 
  /**
   * This property denotes whether a request is currently being made or not
   * @property
   * @public
   * @type {boolean}
   */
  public loading: boolean = false;
  
  isShown: boolean = false 
  /**
   * This property contains the user being authenticated
   * @property
   * @public
   * @type {IUser}
   */
  public user: IUser = ({} as IUser);
  public msg:any;
  /**
   * This method instantiates our route component with injected dependencies
   * @param {CognitoService} cognitoService
   * @param {Router} router
   */
  constructor(

    /**
     * This property contains the instance of our Cognito service provider
     * @private
     * @property
     * @type {CognitoService}
     */
    private cognitoService: CognitoService,

    /**
     * This property contains the instance of our application's router
     * @private
     * @property
     * @type {Router}
     */
    private router: Router
  ) { }

  /**
   * This method fires when the route component has been initialized
   * @async
   * @returns {Promise<void>}
   */
  public async ngOnInit(): Promise<void> {
    this.cognitoService.setNavbar()

    // Check to see if the user has already been authenticated
    // if (await this.cognitoService.isAuthenticated()) await this.router.navigate(['/home']);
  }
  toggleShow() {

    this.isShown = ! this.isShown;
    
    }
  /**
   * This method authenticates the form input with Cognito
   * @async
   * @returns {Promise<void>}
   */
  public async signIn(): Promise<void> {

    // Reset the loading flag into the instance
    // this.loading = true;
    console.log("this.user",this.user)
    // await this.cognitoService.signIn(this.user);
 if(this.user.email=="demo@gmail.com" && this.user.password=="demo"){

  localStorage.setItem("user",this.user.email)
  try {

    // Authenticate the user with Cognito
    await this.cognitoService.signIn(this.user);

    // We're done, navigate to the profile page
    await this.router.navigate(['/Home']);
  } finally {

    // Reset the loading flag into the instance
    this.loading = true;
  }
 }   
else{
 
  this.msg="Incoreect User Details."
}
    // Try to authenticate the user with Cognito
   
  }
}
