import { CountriesService } from './../../service/countries.service';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  moonIcon = faMoon;
  themeValueBackground$ = this.countriesService.themebackground$;
  themeValueElement$ = this.countriesService.themeElement$;


  constructor(private countriesService:CountriesService){
  }



  modeSetter(){
    if(this.countriesService.themeValue.value === 'light'){
      this.countriesService.setTheme('dark');
      localStorage.setItem('darkMode', 'dark');
    }else if(this.countriesService.themeValue.value === 'dark'){
      this.countriesService.setTheme('light');
      localStorage.setItem('darkMode', 'light');
    }
  }
}
