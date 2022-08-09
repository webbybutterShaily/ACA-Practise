import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPrintComponent } from './initial-print.component';

describe('InitialPrintComponent', () => {
  let component: InitialPrintComponent;
  let fixture: ComponentFixture<InitialPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
