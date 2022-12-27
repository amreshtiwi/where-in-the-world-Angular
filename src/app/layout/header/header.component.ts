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
  modeValue = this.countriesService.modeValue;
  backgroundStyle = this.countriesService.backgroundStyles;
  // modeFlag = this.modeValue.value === "light" ? false : true ; //true -> dark   false -> light 

  constructor(private countriesService:CountriesService){
  }



  modeSetter(){
    if(this.modeValue.value === 'light'){
      localStorage.setItem('darkMode', 'dark');
      this.countriesService.modeValue.next('dark');
    }else{
      localStorage.setItem('darkMode', 'light');
      this.countriesService.modeValue.next('light');
    }
  }
}
