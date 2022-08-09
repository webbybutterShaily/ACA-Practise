import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eeocform1Component } from './eeocform1.component';

describe('Eeocform1Component', () => {
  let component: Eeocform1Component;
  let fixture: ComponentFixture<Eeocform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eeocform1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Eeocform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
