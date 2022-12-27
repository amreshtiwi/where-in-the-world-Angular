import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderbuttonsComponent } from './borderbuttons/borderbuttons.component';



@NgModule({
  declarations: [DetailspageComponent, BorderbuttonsComponent],
  exports:[
    DetailspageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class DetailspageModule { }
