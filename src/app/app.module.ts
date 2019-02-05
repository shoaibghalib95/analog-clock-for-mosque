import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ClocksAndFeedsComponent } from './clocks-and-feeds/clocks-and-feeds.component';
import { InputFormsComponent } from './input-forms/input-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ClocksAndFeedsComponent,
    InputFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TimepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
