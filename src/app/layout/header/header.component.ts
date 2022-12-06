import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  moonIcon = faMoon;
}
