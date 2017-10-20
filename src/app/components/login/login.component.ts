import { Component, OnInit , OnChanges} from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {LoginService} from '../../services/login.service';
import {UserModel} from '../../model/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  errMsg = '无';
  loginForm: FormGroup;
  userData: UserModel[];

  constructor(
    private router: Router,
    private http: Http,
    private fb: FormBuilder,
    private loginService: LoginService,
  ) {
    this.createForm();
    this.userData = this.loginService.getUsers();
  }

  createForm() {
    this.loginForm = this.fb.group({
      account: ['', [Validators.required, ]],
      password: ['', [Validators.required, ]],
    });
  }

  get account() { return this.loginForm.get('account'); }

  get password() { return this.loginForm.get('password'); }

  login() {
    this.loginService.getToken(this.loginForm.get('account').value, this.loginForm.get('password').value)
      .subscribe(resp => {
        this.errMsg = this.errMsg + resp.toString();
        }
      );
  }

  loginValidate() {
    this.userData = this.loginService.getUsers();
  }
}
