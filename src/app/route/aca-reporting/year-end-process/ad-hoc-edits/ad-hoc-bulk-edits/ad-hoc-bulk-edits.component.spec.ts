import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHocBulkEditsComponent } from './ad-hoc-bulk-edits.component';

describe('AdHocBulkEditsComponent', () => {
  let component: AdHocBulkEditsComponent;
  let fixture: ComponentFixture<AdHocBulkEditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdHocBulkEditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHocBulkEditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
