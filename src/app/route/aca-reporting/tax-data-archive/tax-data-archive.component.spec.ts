import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDataArchiveComponent } from './tax-data-archive.component';

describe('TaxDataArchiveComponent', () => {
  let component: TaxDataArchiveComponent;
  let fixture: ComponentFixture<TaxDataArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxDataArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDataArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
