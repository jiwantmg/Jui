import { NgModule } from '@angular/core';
import { JuiDatepickerComponent } from './jui-datepicker.component';
import { JuiNepaliDatepickerComponent } from './jui-nepali-datepicker/jui-nepali-datepicker.component';
import { JuiEnglishDatepickerComponent } from './jui-english-datepicker/jui-english-datepicker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LekhaClickOutsideDirective } from './jui-nepali-datepicker/lekha-click-outside.directive';


@NgModule({
  declarations: [
    JuiDatepickerComponent, 
    JuiNepaliDatepickerComponent, 
    JuiEnglishDatepickerComponent,
    LekhaClickOutsideDirective
  ],
  imports: [    
    CommonModule,
    FormsModule
  ],
  exports: [JuiDatepickerComponent]
})
export class JuiDatepickerModule { }
