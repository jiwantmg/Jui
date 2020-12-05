import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[libLekhaClickOutside]'
})
export class LekhaClickOutsideDirective {
  @Output() public clickOutside = new EventEmitter();

  constructor(private _elementRef: ElementRef) { }

  @HostListener("window:click",['$event.target'])
  public onClick(targetElement)
  {    
    if(targetElement.id === "jui-datepicker") { return; }
    const isClickInside = this._elementRef.nativeElement.contains(targetElement);
    if(!isClickInside) {      
      this.clickOutside.emit("outside");
    }
  }
}
