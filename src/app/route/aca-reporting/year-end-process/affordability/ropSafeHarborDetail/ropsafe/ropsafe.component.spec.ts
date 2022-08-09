import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopsafeComponent } from './ropsafe.component';

describe('RopsafeComponent', () => {
  let component: RopsafeComponent;
  let fixture: ComponentFixture<RopsafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopsafeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RopsafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
