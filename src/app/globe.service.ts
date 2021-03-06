import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Filter } from './interfaces/filter.interface';
import { Country } from './interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class GlobeService {

  apiURL: string = 'https://restcountries.eu/rest/v2';
  acceptableFilters = ['region', 'lang', 'currency'];

  constructor(private http: HttpClient) {
  }

  getCountries(filter: Filter): Observable<Country[]> {
    let url = `${this.apiURL}/${filter.category}/${filter.value}`;
    return this.http.get<Country[]>(url);
  }

  getCountry(filter: Filter): Observable<Country> {
    let url = `${this.apiURL}/${filter.category}/${filter.value}`;
    return this.http.get<Country>(url);
  }


}
