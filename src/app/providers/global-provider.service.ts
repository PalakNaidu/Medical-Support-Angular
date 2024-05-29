import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIResponse } from '../models/APIResponse';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class GlobalProviderService {
    public API_URL: string = 'http://52.23.161.176:3000/api';

    constructor(private http: HttpClient) {}

    httpPost(apiEndPoint: string, postObj: Object, headers?: HttpHeaders): Observable<any> {
      return this.http.post<any>(this.API_URL + apiEndPoint, postObj, { headers });
    }
  
    httpPut(apiEndPoint: string, postObj: Object): Observable<any> {
      return this.http.put<any>(this.API_URL + apiEndPoint, postObj);
    }
  
    httpGet(apiEndPoint: string): Observable<any> {
      return this.http.get<any>(this.API_URL + apiEndPoint);
    }
  
    externalHttpGet(apiEndPoint: string): Observable<APIResponse> {
      return this.http.get<APIResponse>(apiEndPoint);
    }
  
}
