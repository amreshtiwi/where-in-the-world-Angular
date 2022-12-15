import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.scss']
})
export class DetailspageComponent {
  countryCode?:string='test';
  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => this.countryCode=params['cca2']);
}
}
