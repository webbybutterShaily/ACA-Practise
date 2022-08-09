import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreaksInServiceComponent } from './breaks-in-service.component';

describe('BreaksInServiceComponent', () => {
  let component: BreaksInServiceComponent;
  let fixture: ComponentFixture<BreaksInServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreaksInServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreaksInServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
