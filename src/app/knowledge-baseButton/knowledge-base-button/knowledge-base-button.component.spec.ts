import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeBaseButtonComponent } from './knowledge-base-button.component';

describe('KnowledgeBaseButtonComponent', () => {
  let component: KnowledgeBaseButtonComponent;
  let fixture: ComponentFixture<KnowledgeBaseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeBaseButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeBaseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
