import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCitiesComponent } from './choose-cities.component';

describe('ChooseCitiesComponent', () => {
  let component: ChooseCitiesComponent;
  let fixture: ComponentFixture<ChooseCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseCitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
