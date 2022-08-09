import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleIchraForAffordabilityComponent } from './single-ichra-for-affordability.component';

describe('SingleIchraForAffordabilityComponent', () => {
  let component: SingleIchraForAffordabilityComponent;
  let fixture: ComponentFixture<SingleIchraForAffordabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleIchraForAffordabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleIchraForAffordabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
