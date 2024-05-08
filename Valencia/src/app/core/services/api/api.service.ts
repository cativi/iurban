import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseApiURL = 'https://experimental.ciceroneweb.com/api/';


  private httpService: HttpClient = inject(HttpClient);


  get<T>(path: string, params?: HttpParams): Observable<T | any> {
    return this.request('get', path, undefined, params);
  }

  private request(method: string, path: string, body?: any, params?: HttpParams): Observable<any> {
    const options = this.createRequestOptions(body, params);
    return this.httpService
      .request<any>(method, `${this.baseApiURL}${path}`, options)
      .pipe(catchError(error => this.requestErrorHandler(error, body)));
  }

  private createRequestOptions(body?: any | undefined, params?: HttpParams) {
    const options = {
      headers: new HttpHeaders(),
      params: params || {},
      body
    };
    options.headers.append('Content-Type', 'application/json');
    return options;
  }

  private requestErrorHandler(err: HttpErrorResponse, body: any): Observable<HttpErrorResponse> {
    return throwError({ ...err, body });
  }
}
