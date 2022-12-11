import { CountrySectionModule } from './country-section/country-section.module';
import { SearchFilterSectionModule } from './search-filter-section/search-filter-section.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  exports:[
    HomepageComponent
  ],
  imports: [
    CommonModule,
    SearchFilterSectionModule,
    CountrySectionModule
  ]
})
export class HomepageModule { }