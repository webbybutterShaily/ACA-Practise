import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfomationComponent } from './delete-confomation.component';

describe('DeleteConfomationComponent', () => {
  let component: DeleteConfomationComponent;
  let fixture: ComponentFixture<DeleteConfomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConfomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
