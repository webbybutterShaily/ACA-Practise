import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddestablishmentComponent } from './addestablishment.component';

describe('AddestablishmentComponent', () => {
  let component: AddestablishmentComponent;
  let fixture: ComponentFixture<AddestablishmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddestablishmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddestablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
