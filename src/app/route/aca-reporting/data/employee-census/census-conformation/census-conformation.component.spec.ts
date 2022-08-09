import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensusConformationComponent } from './census-conformation.component';

describe('CensusConformationComponent', () => {
  let component: CensusConformationComponent;
  let fixture: ComponentFixture<CensusConformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CensusConformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CensusConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
