import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIResponse } from '../models/APIResponse';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class GlobalProviderService {
    public API_URL: string = 'https://dev-api.evitalrx.in/v1/fulfillment';

    constructor(private http: HttpClient) {}

    httpPost(apiEndPoint: string, postObj: Object) {
      return new Promise((resolve, reject) => {
        this.http.post(this.API_URL + apiEndPoint, postObj)
          .subscribe((res:any ) => {
            if (res.status_message && res.data != null) {
              resolve(res.data);
            } else {
              reject(res.message);
            }
          }, err => {
            console.log('post', err);
            reject(err);
          });
      });
    }
  
    httpGet(apiEndPoint: string) {
      return new Promise((resolve, reject) => {
        this.http.get(this.API_URL + apiEndPoint)
          .subscribe((res: any) => {
            if (res.success_message && res.data != null) {
              resolve(res.data);
            } else {
              reject(res.message);
            }
          }, err => {
            console.error(err);
            reject(err);
          });
      });
    }
  
}
