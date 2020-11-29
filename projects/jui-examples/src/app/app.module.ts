import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JuiAutocompleteModule } from 'jui-autocomplete';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JuiAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
