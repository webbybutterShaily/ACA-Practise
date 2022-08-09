import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateW2WagesComponent } from './update-w2-wages.component';

describe('UpdateW2WagesComponent', () => {
  let component: UpdateW2WagesComponent;
  let fixture: ComponentFixture<UpdateW2WagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateW2WagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateW2WagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
