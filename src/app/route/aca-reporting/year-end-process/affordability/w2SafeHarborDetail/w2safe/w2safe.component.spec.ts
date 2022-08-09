import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W2safeComponent } from './w2safe.component';

describe('W2safeComponent', () => {
  let component: W2safeComponent;
  let fixture: ComponentFixture<W2safeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ W2safeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(W2safeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
