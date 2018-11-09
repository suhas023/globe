import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GlobeService {

  apiURL: string = 'https://restcountries.eu/rest/v2/';
  acceptableFilters = ['africa', 'americas', 'asia', 'europe', 'oceania', 'lang', 'currency'];

  constructor(private http: HttpClient) {
  }


}
