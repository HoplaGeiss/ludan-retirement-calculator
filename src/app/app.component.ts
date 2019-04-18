import { Component } from '@angular/core';

@Component({
  selector: 'ludan-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="wrapper">
      <h1>Retirement Calculator</h1>
      <ngx-ludan-retirement-calculator></ngx-ludan-retirement-calculator>
    </div>
  `
})
export class AppComponent {}
