import { Observable } from 'rxjs';
import { CountriesService, Country } from './../../service/countries.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'borderbuttons',
  templateUrl: './borderbuttons.component.html',
  styleUrls: ['./borderbuttons.component.scss']
})
export class BorderbuttonsComponent implements OnInit{
  countryInfo$ ?: Observable<Country[]>
  @Input() code:string = "";
  
  themeValueBackground$ = this.countriesService.themebackground$;
  themeValueElement$ = this.countriesService.themeElement$;
  constructor(private countriesService:CountriesService) {
  }

  ngOnInit(): void {
    this.countryInfo$ = this.countriesService.getDetails(this.code);
  }
}
