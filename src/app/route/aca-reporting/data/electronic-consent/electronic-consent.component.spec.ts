import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicConsentComponent } from './electronic-consent.component';

describe('ElectronicconsentComponent', () => {
  let component: ElectronicConsentComponent;
  let fixture: ComponentFixture<ElectronicConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicConsentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
