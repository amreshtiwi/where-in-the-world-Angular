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
  themeValueBackground$ = this.countriesService.themebackground$;
  themeValueElement$ = this.countriesService.themeElement$;

  constructor(private countriesService:CountriesService){
  }


  
  handleSearch(){
    this.countriesService.searchValue.next(this.searchValue);
  }

}
