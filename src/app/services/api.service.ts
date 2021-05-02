import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banner } from '../models/banner';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiUrl = `https://fast-lowlands-95849.herokuapp.com/api/common/getBanner`;

  getBannerData(): Observable<Banner> {
    return this.http.get<Banner>(this.apiUrl);
  }
}
