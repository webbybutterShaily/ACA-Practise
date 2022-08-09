import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentForm1095CDataComponent } from './current-form1095-cdata.component';

describe('CurrentForm1095CDataComponent', () => {
  let component: CurrentForm1095CDataComponent;
  let fixture: ComponentFixture<CurrentForm1095CDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentForm1095CDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentForm1095CDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
