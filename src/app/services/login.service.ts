import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable, Subject } from 'rxjs/';
import 'rxjs/add/operator/map';

import {UserModel} from '../model/user-model';
import {USERDATA} from '../data/user-data';


export interface LoginRequestParam {
  username: string;
  password: string;
}

export interface UserInStorage{
  userId: string;
  email: string;
  displayName: string;
  token: string;
}

export interface LoginInfoInStorage{
  success: boolean;
  message: string;
  landingPage: string;
  user?: UserInStorage;
}

@Injectable()
export class LoginService {

  userData: UserModel[];

  constructor(
    private http: Http,
  ) { }

  getUsers(): UserModel[] {
    return USERDATA;
  }

  login(account: string, password: string): Observable<UserModel[]> {
    return this.http.get('api/login/?account=${account}' )
      .map(reponse => reponse.json().data as UserModel[]);
    // this.router.navigate(['/manager']);
  }

  getToken(username: string, password: string): Observable<any> {
    const bodyData: LoginRequestParam = {
      'username': username,
      'password': password,
    }
    const loginDataSubject: Subject<any> = new Subject<any>();
    // let loginInfoReturn: LoginInfoInStorage ;
    this.http.post('api/login/?account=${account}', bodyData)
      .map( jsonResp => jsonResp.json()).subscribe(
        v => console.log(v)
    )


    return loginDataSubject;
  }
}

/*.subscribe(jsonResp => {
  loginInfoReturn = {
    'success': true,
    'message': jsonResp.json(),
    'landingPage': '1',
    'user': {
      'userId': '1',
      'email': '123123',
      'displayName': '123123',
      'token': '123123',
    }
  };
   console.log(loginInfoReturn.message);
  loginDataSubject.next(loginInfoReturn);*/
// });
