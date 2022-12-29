import { CountriesService } from './../../../service/countries.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-filter-section',
  templateUrl: './search-filter-section.component.html',
  styleUrls: ['./search-filter-section.component.scss']
})
export class SearchFilterSectionComponent {

  themeValueBackground$ = this.countriesService.themebackground$;
  themeValueElement$ = this.countriesService.themeElement$;
  constructor(private countriesService: CountriesService){
  }


}
