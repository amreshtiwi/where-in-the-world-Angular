import { CountriesService } from '../../../service/countries.service';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  angleDownIcon=faAngleDown;
  showSelectFlag:boolean = false;
  selectedValue?: string;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  filterValue:string = this.countriesService.filterValue.value;
  filterValueBtn:string='Filter By';
  themeValueBackground$ = this.countriesService.themebackground$;
  themeValueElement$ = this.countriesService.themeElement$;

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

  filters: string[] = [
    'FilterBy',
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania',
    'Favourties'
  ];
  selected = 'Filter By'; 
}
