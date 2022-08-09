import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicatePrintComponent } from './duplicate-print.component';

describe('DuplicatePrintComponent', () => {
  let component: DuplicatePrintComponent;
  let fixture: ComponentFixture<DuplicatePrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicatePrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicatePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
