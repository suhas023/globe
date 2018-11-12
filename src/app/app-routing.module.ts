import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinentsComponent } from './continents/continents.component';
import { ContriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  {path: '', component: ContinentsComponent},
  {path: 'countries', component: ContriesComponent},
  {path: 'country', component: CountryComponent},
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
