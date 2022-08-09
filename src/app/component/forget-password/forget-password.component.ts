import { Component, OnInit } from '@angular/core';
import IUser from '../../interface/IUser';
import { Router } from '@angular/router';
import { CognitoService } from '../../service/cognito.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
email!:string
  constructor(private CognitoService:CognitoService) { }
  public loading: boolean = false;

  ngOnInit(): void {
    this.CognitoService.setNavbar()

  }

}
