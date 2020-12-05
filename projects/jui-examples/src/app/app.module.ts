import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JuiAutocompleteModule } from 'jui-autocomplete';
import { AppComponent } from './app.component';
import { JuiDatepickerModule } from 'jui-datepicker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JuiAutocompleteModule,
    JuiDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }