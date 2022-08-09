import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EFileCompleteImportComponent } from './e-file-complete-import.component';

describe('EFileCompleteImportComponent', () => {
  let component: EFileCompleteImportComponent;
  let fixture: ComponentFixture<EFileCompleteImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EFileCompleteImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EFileCompleteImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
