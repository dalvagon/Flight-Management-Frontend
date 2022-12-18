import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAirportsComponent } from './choose-airports.component';

describe('ChooseAirportsComponent', () => {
  let component: ChooseAirportsComponent;
  let fixture: ComponentFixture<ChooseAirportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseAirportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseAirportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
