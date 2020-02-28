import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
  }

  get(url): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}${url}`, {
      headers: this.headers
    });
  }

  post(url, body): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}${url}`, body, {
      headers: this.headers
    });
  }

  put(url, body): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}${url}`, body, {
      headers: this.headers
    });
  }

  delete(url, body): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}${url}`, body, {
      headers: this.headers
    });
  }
}
