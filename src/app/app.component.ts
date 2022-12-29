import { CountriesService } from './service/countries.service';
import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'what-in-the-world-angular';
  themeValueBackground$ = this.countriesService.themebackground$;
  constructor(private countriesService:CountriesService){
  }
}
