import { CountriesService } from '../../../service/countries.service';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  angleDownIcon=faAngleDown;
  showSelectFlag:boolean = false;
  filterValue:string = this.countriesService.filterValue.value;
  filterValueBtn:string='Filter By';
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

  setFilter(filterValue:string){
    this.countriesService.filterValue.next(filterValue);
    this.showSelectFlag = !this.showSelectFlag;
    this.filterValueBtn = filterValue;
  }


  showSelect(){
    this.showSelectFlag = !this.showSelectFlag;
  }
}
