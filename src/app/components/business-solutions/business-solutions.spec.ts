import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSolutions } from './business-solutions';

describe('BusinessSolutions', () => {
  let component: BusinessSolutions;
  let fixture: ComponentFixture<BusinessSolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessSolutions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessSolutions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
