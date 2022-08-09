import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EeochomeComponent } from './eeochome.component';

describe('EeochomeComponent', () => {
  let component: EeochomeComponent;
  let fixture: ComponentFixture<EeochomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EeochomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EeochomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
