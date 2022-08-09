import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingHomeComponent } from './home.component';

describe('ReportingHomeComponent', () => {
  let component: ReportingHomeComponent;
  let fixture: ComponentFixture<ReportingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
