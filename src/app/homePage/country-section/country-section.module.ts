import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrySectionComponent } from './country-section/country-section.component';
import { CountriesCardsComponent } from './countries-cards/countries-cards.component';
import { FavourtiesComponent } from './favourties/favourties.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CountrySectionComponent,
    CountriesCardsComponent,
    FavourtiesComponent
  ],
  exports:[
    CountrySectionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class CountrySectionModule { }
