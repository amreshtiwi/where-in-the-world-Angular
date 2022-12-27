import { CountriesService } from '../../../service/countries.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchValue:string=this.countriesService.searchValue.value;
  searchIcon=faSearch;
  modeValue = this.countriesService.modeValue;
  modeFlag = this.modeValue.value === "light" ? false : true ; //true -> dark   false -> light 

  constructor(private countriesService:CountriesService){
  }

  backgroundStyles: Record<string, string> = {
    'background': this.modeFlag ? '#202c37' : '#fafafa',
    'color': this.modeFlag ? 'white' : 'black'
  };

  elementStyles: Record<string, string> = {
    'background': this.modeFlag ? '#2b3945' : '#ffffff',
    'color': this.modeFlag ? 'white' : 'black'
  };
  
  handleSearch(){
    this.countriesService.searchValue.next(this.searchValue);
  }

}
