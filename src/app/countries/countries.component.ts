import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { map, flatMap, catchError } from 'rxjs/operators';
import { Subscription, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';
import { GlobeService } from '../globe.service';
import { Filter } from '../interfaces/filter.interface';
import { Country } from '../interfaces/country.interface';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class ContriesComponent implements OnInit, OnDestroy {
  countries$: Subscription;
  allCountries: Country[];
  filteredCountries: Country[];
  errorOccurred: boolean;
  errorMessage: string;
  loading: boolean;

  constructor(private globeService: GlobeService, 
    private route: ActivatedRoute, 
    private location: Location,
    private toastr: ToastrService) {
  }

  filterCountries(key: string) {
    key = key.toLocaleLowerCase().trim();
    this.filteredCountries = this.allCountries.filter(country => {
      if(country.name.toLowerCase().includes(key))
        return true;
      if(country.alpha2Code && country.alpha2Code.toLocaleLowerCase().includes(key))
        return true;
      if(country.alpha3Code && country.alpha3Code.toLocaleLowerCase().includes(key))
        return true;
      return false;
    });
  }

  ngOnInit() {
    this.countries$ = this.route.queryParamMap.pipe(
      map(params => ({
        category: params.get('category'),
        value: params.get('value')
      })),
      flatMap((s: Filter) => {
        this.loading = true;
        this.errorOccurred = false;
        this.errorMessage = null;
        return this.globeService.getCountries(s).pipe(
          catchError((res: HttpErrorResponse) => {
              this.errorMessage = res.statusText;
              this.errorOccurred = true;
              return of([]); 
            }
          )
        );
      })
    ).subscribe(
      (countries: Country[]) => {
        this.allCountries = countries;
        this.filteredCountries = countries;
        this.loading = false;
      },
      error =>{
        this.errorOccurred = true;
        this.errorMessage = "Ah Snap!, Error Occurred"
      }
    );
  }

  ngOnDestroy() {
    this.countries$.unsubscribe();
  }
}
