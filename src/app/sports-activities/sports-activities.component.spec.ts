import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsActivitiesComponent } from './sports-activities.component';

describe('SportsActivitiesComponent', () => {
  let component: SportsActivitiesComponent;
  let fixture: ComponentFixture<SportsActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
