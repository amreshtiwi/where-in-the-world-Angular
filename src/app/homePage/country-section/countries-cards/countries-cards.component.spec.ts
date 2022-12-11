import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesCardsComponent } from './countries-cards.component';

describe('CountriesCardsComponent', () => {
  let component: CountriesCardsComponent;
  let fixture: ComponentFixture<CountriesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
