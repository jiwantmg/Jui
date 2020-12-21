import { NgModule } from '@angular/core';
import { JuiDatepickerComponent } from './jui-datepicker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LekhaClickOutsideDirective } from './lekha-click-outside-directive';


@NgModule({
  declarations: [
    JuiDatepickerComponent, 
    LekhaClickOutsideDirective
  ],
  imports: [    
    CommonModule,
    FormsModule
  ],
  exports: [JuiDatepickerComponent]
})
export class JuiDatepickerModule { }
