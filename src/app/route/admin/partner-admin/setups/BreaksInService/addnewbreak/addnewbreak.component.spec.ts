import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewbreakComponent } from './addnewbreak.component';

describe('AddnewbreakComponent', () => {
  let component: AddnewbreakComponent;
  let fixture: ComponentFixture<AddnewbreakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewbreakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewbreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
