import { CountriesService, Country } from './../../service/countries.service';
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

  constructor(private countriesServies: CountriesService){
  }


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
