import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FplsafeComponent } from './fplsafe.component';

describe('FplsafeComponent', () => {
  let component: FplsafeComponent;
  let fixture: ComponentFixture<FplsafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FplsafeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FplsafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
