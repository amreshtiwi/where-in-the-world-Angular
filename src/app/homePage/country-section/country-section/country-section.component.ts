import { CountriesService, Country } from '../../../service/countries.service';
import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-country-section',
  templateUrl: './country-section.component.html',
  styleUrls: ['./country-section.component.scss']
})
export class CountrySectionComponent {

  countries$ = this.countriesServies.filteredCountries$;
  favourties: Country[] = [];
  modeValue = this.countriesServies.modeValue;
  modeFlag = this.modeValue.value === "light" ? false : true ; //true -> dark   false -> light 

  constructor(private countriesServies: CountriesService){
  }

  backgroundStyles: Record<string, string> = {
    'background': this.modeFlag ? '#202c37' : '#fafafa',
    'color': this.modeFlag ? 'white' : 'black'
  };

  elementStyles: Record<string, string> = {
    'background': this.modeFlag ? '#2b3945' : '#ffffff',
    'color': this.modeFlag ? 'white' : 'black'
  };

  // dragStart(flag:string,name:string){
  //   console.log(flag,name);
  // }
  drop(event: CdkDragDrop<Country[]>) {
    // if(this.countriesServies.favouritesCountries?.includes)
    console.log(event.container.data);
  }

  ContryTraceBy(index: number,country: Country){
    return country.cca2;

  }
}
