import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDocumentRepositoryComponent } from './tax-document-repository.component';

describe('TaxDocumentRepositoryComponent', () => {
  let component: TaxDocumentRepositoryComponent;
  let fixture: ComponentFixture<TaxDocumentRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxDocumentRepositoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDocumentRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
