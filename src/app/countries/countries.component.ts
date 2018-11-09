import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

import { GlobeService } from '../globe.service';
import {Filter} from '../interfaces/filter.interface';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class ContriesComponent implements OnInit {
  countries$: any;
  filter$: Observable<Filter>;
  constructor(private globeService: GlobeService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.filter$ = this.route.queryParamMap
      .pipe(map(params => ({
        category: params.get('category'),
        value: params.get('value')
      })));
    
    this.filter$
      .subscribe((filter:Filter) => {
        this.countries$ = this.globeService.getCountries(filter);
      });
      
  }
}
