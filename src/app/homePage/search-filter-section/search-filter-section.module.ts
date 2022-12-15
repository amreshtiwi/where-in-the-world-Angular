import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterSectionComponent } from './search-filter-section/search-filter-section.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchFilterSectionComponent,
    SearchComponent,
    FilterComponent
  ],
  exports:[
    SearchFilterSectionComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class SearchFilterSectionModule { }
