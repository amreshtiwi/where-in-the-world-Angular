import { CountriesService } from './../../service/countries.service';
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

  constructor(private countriesService:CountriesService){
  }

  setFilter(filterValue:string){
    this.countriesService.filterValue.next(filterValue);
    this.showSelectFlag = !this.showSelectFlag;
    this.filterValueBtn = filterValue;
  }


  showSelect(){
    this.showSelectFlag = !this.showSelectFlag;
  }
}
