import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import $ from 'jquery';
/*
  Generated class for the CiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CiProvider {
  // url: string = 'http://localhost/icheck/service/index.php/api/';
  // public url: string = 'http://baramesh.com/demo/icheck/service/index.php/api/';
  public url: string = 'http://www.00505-429.com/@inside/appcpru/service/index.php/api';
  
  constructor(public http: Http) {
  }

  get(endpoint: string, params?: any, options?: RequestOptions) {
    if (!options) {
      options = new RequestOptions();
    }
    console.log(params);

    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(k, params[k]);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }

    return this.http.get(this.url + '/' + endpoint, options);
  }

  post(endpoint: string, body: any) {

    console.log(body);

    let options = new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8;"
      })
    });
    let _body = {
      data: body
    };
    let params = $.param(_body);
    console.log(params);
    return this.http.post(this.url + '/' + endpoint, params, options)

  }

  put(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }

  delete(endpoint: string, options?: RequestOptions) {
    return this.http.delete(this.url + '/' + endpoint, options);
  }

  patch(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }
}
