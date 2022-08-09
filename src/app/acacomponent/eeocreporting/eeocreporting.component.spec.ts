import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EeocreportingComponent } from './eeocreporting.component';

describe('EeocreportingComponent', () => {
  let component: EeocreportingComponent;
  let fixture: ComponentFixture<EeocreportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EeocreportingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EeocreportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
