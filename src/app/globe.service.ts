import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Filter } from './interfaces/filter.interface';

@Injectable({
  providedIn: 'root'
})
export class GlobeService {

  apiURL: string = 'https://restcountries.eu/rest/v2';
  acceptableFilters = ['region', 'lang', 'currency'];

  constructor(private http: HttpClient) {
  }

  getCountries(filter: Filter):Observable<HttpResponse<any>> {
    let url = `${this.apiURL}/${filter.category}/${filter.value}`;
    return this.http.get<any>(url);
  }


}
