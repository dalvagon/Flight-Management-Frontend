import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlightDetailsComponent } from './add-flight-details.component';

describe('AddFlightDetailsComponent', () => {
  let component: AddFlightDetailsComponent;
  let fixture: ComponentFixture<AddFlightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlightDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
