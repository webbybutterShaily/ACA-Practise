import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRespositoryComponent } from './form-respository.component';

describe('FormRespositoryComponent', () => {
  let component: FormRespositoryComponent;
  let fixture: ComponentFixture<FormRespositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRespositoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRespositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
