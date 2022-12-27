import { CountriesService } from './../../../service/countries.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-filter-section',
  templateUrl: './search-filter-section.component.html',
  styleUrls: ['./search-filter-section.component.scss']
})
export class SearchFilterSectionComponent {
  modeValue = this.countriesService.modeValue;
  modeFlag = this.modeValue.value === "light" ? false : true ; //true -> dark   false -> light 
  constructor(private countriesService: CountriesService){
  }

  backgroundStyles: Record<string, string> = {
    'background': this.modeFlag ? '#202c37' : '#fafafa',
    'color': this.modeFlag ? 'white' : 'black'
  };

  elementStyles: Record<string, string> = {
    'background': this.modeFlag ? '#2b3945' : '#ffffff',
    'color': this.modeFlag ? 'white' : 'black'
  };
}
