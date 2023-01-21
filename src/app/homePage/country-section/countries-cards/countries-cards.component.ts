import { BehaviorSubject } from 'rxjs';
import { CountriesService } from './../../../service/countries.service';
import { Component,Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';


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

  starColorValue = new BehaviorSubject('lightgray');
  starColor = {'color': this.starColorValue.value}
  star = faStar;
  themeValueBackground$ = this.countriesService.themebackground$;
  themeValueElement$ = this.countriesService.themeElement$;
  constructor(private countriesService:CountriesService){
  }

  addtoFav(code?:string){
    this.starColorValue.next(this.starColorValue.value === "orange" ? "lightgray" : "orange");
    this.starColor = {'color': this.starColorValue.value}
  }

}
