import { CountriesService } from './../../service/countries.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-country-section',
  templateUrl: './country-section.component.html',
  styleUrls: ['./country-section.component.scss']
})
export class CountrySectionComponent {

  countries$ = this.countriesServies.filteredCountries$;

  constructor(private countriesServies: CountriesService){
  }

}
