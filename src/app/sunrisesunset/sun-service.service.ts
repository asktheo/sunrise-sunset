import {Inject, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LocalSunRiseSunSetResult} from './sunrisesunset-response';


@Injectable()
export class SunServiceService {

  private baseUrl: string;
  private searchParams: HttpParams;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.sunrise-sunset.org/json?';
    this.searchParams = new HttpParams();
  }

  search(): Observable<LocalSunRiseSunSetResult> {
    const url: string = this.baseUrl + this.searchParams.toString()
    return this.http.jsonp<any>(url, 'callback');
  }

  setParam(key: string, value: string){
    this.searchParams = this.searchParams.set(key, value);
  }

}
