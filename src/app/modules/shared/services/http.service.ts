import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment'; 

@Injectable()
export class HttpService {

  apiUrl:string;

  constructor(private http: HttpClient ) { 
    this.apiUrl=environment.url;
  }

  // getData(url) {
  //   return this.http.get(this.apiUrl+url);
  // }

  postData(data) {
    return this.http.post(this.apiUrl, data)
  }
}
