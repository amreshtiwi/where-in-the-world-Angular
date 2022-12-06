import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterSectionComponent } from './search-filter-section.component';

describe('SearchFilterSectionComponent', () => {
  let component: SearchFilterSectionComponent;
  let fixture: ComponentFixture<SearchFilterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFilterSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFilterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
