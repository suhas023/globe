import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { GlobeService } from '../globe.service';
import {Filter} from '../filter';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class ContriesComponent implements OnInit {
  countries: any[] = [];
  filter: Filter;
  constructor(private globeService: GlobeService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe(params => {
        this.filter = {
          category: params.get('category'),
          value: params.get('value')
        }
      });
    console.log(this.filter);
  }
}
