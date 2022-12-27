import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderbuttonsComponent } from './borderbuttons.component';

describe('BorderbuttonsComponent', () => {
  let component: BorderbuttonsComponent;
  let fixture: ComponentFixture<BorderbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderbuttonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
