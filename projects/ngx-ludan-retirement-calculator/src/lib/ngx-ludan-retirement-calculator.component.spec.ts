import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLudanRetirementCalculatorComponent } from './ngx-ludan-retirement-calculator.component';

describe('NgxLudanRetirementCalculatorComponent', () => {
  let component: NgxLudanRetirementCalculatorComponent;
  let fixture: ComponentFixture<NgxLudanRetirementCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLudanRetirementCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLudanRetirementCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
