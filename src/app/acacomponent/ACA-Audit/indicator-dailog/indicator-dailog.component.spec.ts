import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorDailogComponent } from './indicator-dailog.component';

describe('IndicatorDailogComponent', () => {
  let component: IndicatorDailogComponent;
  let fixture: ComponentFixture<IndicatorDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
