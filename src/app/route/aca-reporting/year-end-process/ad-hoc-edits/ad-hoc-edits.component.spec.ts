import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHocEditsComponent } from './ad-hoc-edits.component';

describe('AdHocEditsComponent', () => {
  let component: AdHocEditsComponent;
  let fixture: ComponentFixture<AdHocEditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdHocEditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHocEditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
