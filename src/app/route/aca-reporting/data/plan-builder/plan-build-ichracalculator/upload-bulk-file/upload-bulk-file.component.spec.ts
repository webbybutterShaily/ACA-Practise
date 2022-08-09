import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBulkFileComponent } from './upload-bulk-file.component';

describe('UploadBulkFileComponent', () => {
  let component: UploadBulkFileComponent;
  let fixture: ComponentFixture<UploadBulkFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadBulkFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBulkFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
