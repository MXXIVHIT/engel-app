import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/catch';
import {AppConfig} from '../../app-config';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ApiRequestService {

  constructor(
      private appConfig: AppConfig,
      private http: HttpClient,
      private router: Router,
  )  {}

  /**
   * This is a Global place to add all the request headers for every REST calls
   */
  getHeaders(): HttpHeaders {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      return headers;
  }

  get(url: string, urlParams?: HttpParams): Observable<any> {
      const me = this;
      console.log('URL: ' + this.appConfig.baseApiPath + url);
      return this.http.get(this.appConfig.baseApiPath + url,  {headers: this.getHeaders(),  params: urlParams} )
          .catch(function(error: any) {
              console.log('Some error in catch' + error.status );
              if (error.status === 401 || error.status === 403) {
                  me.router.navigate(['/login']);
              }
              return Observable.throw(error || 'Server error');
          });
  }

  post(url: string, body: Object): Observable<any> {
    const me = this;
    console.log('URL: ' + this.appConfig.baseApiPath + url);
    console.log('body: ' + JSON.stringify(body));
    this.http.post(this.appConfig.baseApiPath + url, JSON.stringify(body), { headers: this.getHeaders()})
      .subscribe(
        (val) => {
          console.log('POST call successful value returned in body',
            val);
        },
        response => {
          console.log('POST call in error', response);
        },
        () => {
          console.log('The POST observable is now completed.');
        });
    return null;
  }

/*  post(url: string, body: Object): Observable<any> {
    const me = this;
    console.log('URL: ' + this.appConfig.baseApiPath + url);
    console.log('body: ' + JSON.stringify(body));
    return this.http.post(this.appConfig.baseApiPath + url, JSON.stringify(body))
      .catch(function(error: any) {
        console.log('error: ' + error.status);
        if (error.status === 401) {
          me.router.navigate(['/login']);
        }
        return Observable.throw(error || 'Server error');
      });
  }*/

  put(url: string, body: Object): Observable<any> {
      const me = this;
      return this.http.put(this.appConfig.baseApiPath + url, JSON.stringify(body))
          .catch(function(error: any) {
              if (error.status === 401) {
                  me.router.navigate(['/logout']);
              }
              return Observable.throw(error || 'Server error');
          });
  }

  delete(url: string): Observable<any> {
      const me = this;
      return this.http.delete(this.appConfig.baseApiPath + url)
          .catch(function(error: any) {
              if (error.status === 401) {
                  me.router.navigate(['/logout']);
              }
              return Observable.throw(error || 'Server error');
          });
  }

}
