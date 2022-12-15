import { RouterModule } from '@angular/router';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DetailspageComponent],
  exports:[
    DetailspageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DetailspageModule { }
