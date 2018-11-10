import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, flatMap, filter, catchError } from 'rxjs/operators';
import {Observable, Subscription, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

import { GlobeService } from '../globe.service';
import {Filter} from '../interfaces/filter.interface';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class ContriesComponent implements OnInit, OnDestroy {
  countries$: Subscription;
  countries: any;
  error: boolean;
  loading: boolean;
  constructor(private globeService: GlobeService, 
    private route: ActivatedRoute, 
    private router: Router) {
  }

  ngOnInit() {
    this.countries$ = this.route.queryParamMap.pipe(
      map(params => ({
        category: params.get('category'),
        value: params.get('value')
      })),
      flatMap(s => {
        console.log(s);
        this.loading = true;
        return this.globeService.getCountries(s).pipe(
          catchError((res, obs) => of([]))
        );
      })
    ).subscribe(
      countries => {
        console.log('s');
        this.countries = countries;
        this.loading = false;
      },
      error =>{
        this.error = true;
      }
    );
    console.log('111111111');
  }

  ngOnDestroy() {
    this.countries$.unsubscribe();
  }
}
