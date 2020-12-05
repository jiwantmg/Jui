import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'jui-datepicker',
  templateUrl: 'jui-datepicker.component.html',
  styleUrls: [
    'jui-datepicker.component.css'
  ]
})
export class JuiDatepickerComponent implements OnInit {
  @Input("isEnglish") isEnglish: boolean = true;
  @Output("onDateSelected") onDateSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }  

  dateSelected(event)
  {
    this.onDateSelected.emit(event);
  }

}
