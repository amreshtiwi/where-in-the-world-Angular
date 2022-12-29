import { CountriesService } from './../../../service/countries.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favourties',
  templateUrl: './favourties.component.html',
  styleUrls: ['./favourties.component.scss']
})
export class FavourtiesComponent {

  themeValueBackground$ = this.countriesService.themebackground$;
  themeValueElement$ = this.countriesService.themeElement$;
  constructor(private countriesService:CountriesService){
  }
}
