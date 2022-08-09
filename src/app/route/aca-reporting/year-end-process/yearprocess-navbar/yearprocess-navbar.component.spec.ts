import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearprocessNavbarComponent } from './yearprocess-navbar.component';

describe('YearprocessNavbarComponent', () => {
  let component: YearprocessNavbarComponent;
  let fixture: ComponentFixture<YearprocessNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearprocessNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearprocessNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
