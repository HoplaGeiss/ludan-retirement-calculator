import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxLudanRetirementCalculatorComponent } from './ngx-ludan-retirement-calculator.component';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule],
  declarations: [NgxLudanRetirementCalculatorComponent],
  exports: [NgxLudanRetirementCalculatorComponent]
})
export class NgxLudanRetirementCalculatorModule {}
