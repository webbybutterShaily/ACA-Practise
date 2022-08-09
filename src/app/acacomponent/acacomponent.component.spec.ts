import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACAComponentComponent } from './acacomponent.component';

describe('ACAComponentComponent', () => {
  let component: ACAComponentComponent;
  let fixture: ComponentFixture<ACAComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACAComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ACAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
