import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import * as moment from 'moment';

function numberValidator(control: FormControl): { [key: string]: any } {
  if (isNaN(control.value)) {
    return { NaN: true };
  }

  return null;
}

@Component({
  selector: 'ngx-ludan-retirement-calculator',
  styleUrls: ['./ngx-ludan-retirement-calculator.component.scss'],
  template: `
    <section class="retirement-calculator">
      <form [formGroup]="form" class="form">
        <div class="input-group">
          <input type="text" formControlName="capitalInvested" />
          <label>Capital currently invested</label>
          <span class="bar"></span>
        </div>

        <div class="input-group">
          <input type="text" formControlName="investmentPerMonth" />
          <label>Projected investment per month</label>
          <span class="bar"></span>
        </div>

        <div class="input-group">
          <input type="text" formControlName="interestRate" />
          <label>Projected interest rate per year</label>
          <span class="bar"></span>
        </div>

        <div class="input-group">
          <input type="text" formControlName="numberRetirementYears" />
          <label>Life expectancy from retirement time</label>
          <span class="bar"></span>
        </div>

        <div class="input-group">
          <input type="text" formControlName="monthlyDividendGoal" />
          <label>Monthly dividend goal at retirement</label>
          <span class="bar"></span>
        </div>
      </form>

      <div *ngIf="form.invalid">Fix the errors to see the results</div>
      <div *ngIf="!form.invalid" class="result">
        <p>Saving goal before retirement: {{ savingGoal | currency: 'GBP':'symbol':'1.0-0' }}</p>
        <p>
          Time left until retirement: <b>{{ timeLeftUntilRetirement.humanize() }}</b>
        </p>
      </div>
    </section>
  `
})
export class NgxLudanRetirementCalculatorComponent implements OnInit {
  form = this.fb.group({
    capitalInvested: [10000, [numberValidator.bind(this)]],
    investmentPerMonth: [1000, [numberValidator.bind(this)]],
    interestRate: [2, [numberValidator.bind(this)]],
    numberRetirementYears: [30, [numberValidator.bind(this)]],
    monthlyDividendGoal: [2000, [numberValidator.bind(this)]]
  });
  savingGoal: number;
  monthLeftUntilRetirement: number;
  timeLeftUntilRetirement: moment.Duration;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.calculateSavingGoal();
    this.calculateMonthLeftToRetirement();

    this.form.valueChanges.subscribe(val => {
      this.calculateSavingGoal();
      this.calculateMonthLeftToRetirement();
    });
  }

  calculateSavingGoal = () => {
    const monthlyDividendGoal = this.form.get('monthlyDividendGoal').value;
    const numberRetirementYears = this.form.get('numberRetirementYears').value;
    const interestRate = this.form.get('interestRate').value / 100;

    this.savingGoal =
      (12 * monthlyDividendGoal) / interestRate -
      (12 * monthlyDividendGoal) / (interestRate * Math.pow(1 + interestRate, numberRetirementYears));
  }

  calculateMonthLeftToRetirement = () => {
    const interestRate = this.form.get('interestRate').value / 100;
    const capitalInvested = this.form.get('capitalInvested').value;
    const investmentPerMonth = this.form.get('investmentPerMonth').value;

    this.monthLeftUntilRetirement =
      Math.log(
        (((this.savingGoal * (1 - (1 + interestRate / 12))) / investmentPerMonth) * (1 + interestRate / 12) - 1) /
          (((capitalInvested * (1 - (1 + interestRate / 12))) / investmentPerMonth) * (1 + interestRate / 12) - 1)
      ) / Math.log(1 + interestRate / 12);

    this.timeLeftUntilRetirement = moment.duration(this.monthLeftUntilRetirement, 'months');
  }
}
