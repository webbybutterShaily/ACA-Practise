import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomorsComponent } from './customors.component';

describe('CustomorsComponent', () => {
  let component: CustomorsComponent;
  let fixture: ComponentFixture<CustomorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
