import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { NgxLudanRetirementCalculatorModule } from '../../projects/ngx-ludan-retirement-calculator/src/lib/ngx-ludan-retirement-calculator.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, NgxLudanRetirementCalculatorModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
