import { CountriesService } from './../../../service/countries.service';
import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-countries-cards',
  templateUrl: './countries-cards.component.html',
  styleUrls: ['./countries-cards.component.scss']
})
export class CountriesCardsComponent {
  @Input() flag?:string;
  @Input() commonName?:string;
  @Input() population?:string;
  @Input() region?:string;
  @Input() capital?:string;
  @Input() cca2?:string;

  themeValueBackground$ = this.countriesService.themebackground$;
  themeValueElement$ = this.countriesService.themeElement$;
  constructor(private countriesService:CountriesService){
  }

}
