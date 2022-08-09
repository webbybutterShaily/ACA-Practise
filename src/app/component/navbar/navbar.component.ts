import { Router } from '@angular/router';
import { CognitoService } from './../../service/cognito.service';
import { Component,ViewChild, OnInit, ViewEncapsulation,ElementRef, ViewChildren, QueryList, AfterViewInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * This class maintains the component structure for the application's navigation bar
 * @class
 */

@Component({ 
  selector: 'app-navbar',
   templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'] ,
    encapsulation: ViewEncapsulation.None,
  })
export class NavbarComponent implements OnInit {
  isLoggedIn!: Observable<boolean>;
  @Input() group = 'demo1';
 
  col:any=""
  /**
   * This method instantiates our component with injected dependencies
   */
  public constructor(private CognitoService:CognitoService,private route:Router) { }

  /**
   * This method fires when the component is initialized
   * @returns {void}
   */
  
  public ngOnInit(): void { 
    this.isLoggedIn = this.CognitoService.isLoggedIn;
    if (this.group=="demo1"){
      this.col="#2a6099"
    }
    if (this.group=="demo2"){
      this.col="#2a6099"
    }
    else if(this.group=="demo3"){
      this.col=" #25b10b"
    }
    else if (this.group=="demo4"){
      this.col="gray"
    }
    
    
  }
 
  
  signOut(){

    this.CognitoService.signOut()
    this.route.navigate(['/sign-in'])
    localStorage.removeItem("user");
  }
  navigateTo(url:any){
    this.route.navigate([url])
  }
}
