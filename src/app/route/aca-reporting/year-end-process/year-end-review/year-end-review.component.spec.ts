import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearEndReviewComponent } from './year-end-review.component';

describe('YearEndReviewComponent', () => {
  let component: YearEndReviewComponent;
  let fixture: ComponentFixture<YearEndReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearEndReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearEndReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
