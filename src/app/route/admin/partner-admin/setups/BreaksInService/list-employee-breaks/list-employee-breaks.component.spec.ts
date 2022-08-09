import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeBreaksComponent } from './list-employee-breaks.component';

describe('ListEmployeeBreaksComponent', () => {
  let component: ListEmployeeBreaksComponent;
  let fixture: ComponentFixture<ListEmployeeBreaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployeeBreaksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeeBreaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
