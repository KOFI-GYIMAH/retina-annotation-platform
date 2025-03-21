import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '@services/common/local-storage.service';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../common/session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class APIConfigService {
  private baseURL = 'https://11a7-41-155-25-243.ngrok-free.app/api/v1';

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService,
    private localStorageService: LocalStorageService
  ) {}

  get<T>(
    url: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<T> {
    const options = {
      params,
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.localStorageService.getItem('token')}`,
        ...headers,
      }),
    };
    return this.http.get<T>(`${this.baseURL}${url}`, options);
  }

  post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.localStorageService.getItem('token')}`,
        ...headers,
      }),
    };
    return this.http.post<T>(`${this.baseURL}${url}`, body, options);
  }

  put<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.localStorageService.getItem('token')}`,
        ...headers,
      }),
    };
    return this.http.put<T>(`${this.baseURL}${url}`, body, options);
  }

  patch<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.localStorageService.getItem('token')}`,
        ...headers,
      }),
    };
    return this.http.patch<T>(`${this.baseURL}${url}`, body, options);
  }

  delete<T>(url: string, headers?: HttpHeaders): Observable<T> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.localStorageService.getItem('token')}`,
        ...headers,
      }),
    };
    return this.http.delete<T>(`${this.baseURL}${url}`, options);
  }

  // * Open Post request
  un_post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    const options = {
      headers: new HttpHeaders({
        ...headers,
      }),
    };
    return this.http.post<T>(`${this.baseURL}${url}`, body, options);
  }

  un_get<T>(
    url: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<T> {
    const options = {
      params,
      headers: new HttpHeaders({
        ...headers,
      }),
    };
    return this.http.get<T>(`${this.baseURL}${url}`, options);
  }
}
