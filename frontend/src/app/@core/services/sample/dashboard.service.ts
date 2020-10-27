import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Form } from '@angular/forms';
import { Post } from '@app/@core/models/Post';
import { URLSConfigs } from '@core/config/urls';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private baseUrl = ` ${environment.host}:${environment.port}${environment.prefix}`
  
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getPostsList(): Observable<Post[]> {
    return this.http.get<Post[]>(URLSConfigs.GET_PRODUCTS, this.httpOptions);
  }
}
