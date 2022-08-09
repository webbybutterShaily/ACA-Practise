import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRateOfPaysComponent } from './update-rate-of-pays.component';

describe('UpdateRateOfPaysComponent', () => {
  let component: UpdateRateOfPaysComponent;
  let fixture: ComponentFixture<UpdateRateOfPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRateOfPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRateOfPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
