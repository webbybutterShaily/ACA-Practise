import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignbreaksComponent } from './assignbreaks.component';

describe('AssignbreaksComponent', () => {
  let component: AssignbreaksComponent;
  let fixture: ComponentFixture<AssignbreaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignbreaksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignbreaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
