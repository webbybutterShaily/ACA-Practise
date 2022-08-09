import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingSetupComponent } from './setup.component';

describe('SetupComponent', () => {
  let component: TrackingSetupComponent;
  let fixture: ComponentFixture<TrackingSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
