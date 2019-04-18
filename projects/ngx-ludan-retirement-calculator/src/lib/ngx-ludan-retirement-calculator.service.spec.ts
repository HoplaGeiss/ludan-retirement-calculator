import { TestBed } from '@angular/core/testing';

import { NgxLudanRetirementCalculatorService } from './ngx-ludan-retirement-calculator.service';

describe('NgxLudanRetirementCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLudanRetirementCalculatorService = TestBed.get(NgxLudanRetirementCalculatorService);
    expect(service).toBeTruthy();
  });
});
