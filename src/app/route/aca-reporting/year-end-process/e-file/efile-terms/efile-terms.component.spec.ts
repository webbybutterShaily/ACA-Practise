import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfileTermsComponent } from './efile-terms.component';

describe('EfileTermsComponent', () => {
  let component: EfileTermsComponent;
  let fixture: ComponentFixture<EfileTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfileTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfileTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
