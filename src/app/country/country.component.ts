import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, flatMap, catchError } from 'rxjs/operators';
import { Subscription, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';
import { GlobeService } from '../globe.service';
import { Filter } from '../interfaces/filter.interface';
import { Country } from '../interfaces/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country$: Subscription;
  country: Country;
  errorOccurred: boolean;
  errorMessage: string;
  loading: boolean;

  constructor(private globeService: GlobeService, private route: ActivatedRoute, 
    private toastr: ToastrService) { }

  getBackground() {
    let style = { 
      'background-image': `url(${this.country.flag})`,
      '-webkit-background-size': `cover`,
      '-moz-background-size': `cover`,
      '-o-background-size': `cover`,
      'background-size': `cover`
    }
    return style;
  }

  ngOnInit() {
    this.country$ = this.route.queryParamMap.pipe(
      map(params => ({
        category: params.get('category'),
        value: params.get('value')
      })),
      flatMap((s: Filter) => {
        this.loading = true;
        this.errorOccurred = false;
        this.errorMessage = null;
        return this.globeService.getCountry(s).pipe(
          catchError((res: HttpErrorResponse) => {
              this.errorMessage = res.statusText;
              this.errorOccurred = true;
              return of(); 
            }
          )
        );
      })
    ).subscribe(
      (countries: Country) => {
        this.country = countries;
        this.loading = false;
      },
      error =>{
        this.errorOccurred = true;
        this.errorMessage = "Ah Snap!, Error Occurred"
      }
    );
  }

  ngOnDestroy() {
    this.country$.unsubscribe();
  }
}
