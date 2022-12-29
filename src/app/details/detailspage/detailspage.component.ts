import { Country } from './../../service/countries.service';

import { Observable } from 'rxjs';
import { CountriesService } from '../../service/countries.service';
import { Component } from '@angular/core';
import { Object } from 'core-js';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft, faBackspace, faBackward } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.scss']
})
export class DetailspageComponent {
  backIcon= faArrowLeft;
  detailedCountries$ ?:Observable<Country[]>;
  themeValueBackground$ = this.countriesService.themebackground$;
  themeValueElement$ = this.countriesService.themeElement$;

  constructor(route: ActivatedRoute, private countriesService:CountriesService) {
    route.params.subscribe((params) => {
      console.log("here here" + params['cca2'])
      this.detailedCountries$ = this.countriesService.getDetails(params['cca2']);
    });
}



getObjectValues(object:Object){
  return Object.values(object);
}

}
