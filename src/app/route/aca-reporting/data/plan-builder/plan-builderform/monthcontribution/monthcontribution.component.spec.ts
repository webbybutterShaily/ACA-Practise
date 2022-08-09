import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthcontributionComponent } from './monthcontribution.component';

describe('MonthcontributionComponent', () => {
  let component: MonthcontributionComponent;
  let fixture: ComponentFixture<MonthcontributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthcontributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthcontributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
