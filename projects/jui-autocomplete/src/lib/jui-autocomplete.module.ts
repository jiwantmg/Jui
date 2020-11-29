import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JuiAutocompleteComponent } from './jui-autocomplete.component';
import { LekhaClickOutsideDirective } from './lekha-click-outside.directive';
import { LekhaKeydownDirective } from './lekha-keydown.directive';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    JuiAutocompleteComponent, 
    LekhaClickOutsideDirective, 
    LekhaKeydownDirective, 
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [JuiAutocompleteComponent]
})
export class JuiAutocompleteModule { }