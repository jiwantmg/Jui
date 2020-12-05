import { Directive, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';

@Directive({
  selector: '[libLekhaKeydown]'
})
export class LekhaKeydownDirective {
  @Output() public keyDownPressed = new EventEmitter();
  @Output() public onEnter = new EventEmitter();

  displayBoxIndex = 0;

  cssClass = "display_box_hover";  
  constructor(private _elementRef: ElementRef) { }

  @HostListener('window:keydown', ['$event'])
  public keyEvent($event: KeyboardEvent)
  {
    if($event.code === "ArrowDown")
    {
      this.navigate(1);
    } else if($event.code === "ArrowUp")
    {
      this.navigate(-1);
    }else if($event.code === "Enter")
    {
      var selected = this._elementRef.nativeElement.querySelector(`.${this.cssClass}`);      
      if(selected)      
      {
        this.onEnter.emit(selected);
      }      
    }
  }

  navigate(diff: number)
  {
    this.displayBoxIndex += diff;
    var oBoxCollection = this._elementRef.nativeElement.querySelectorAll('.item');
    if (this.displayBoxIndex >= oBoxCollection.length)
      this.displayBoxIndex = oBoxCollection.length - 1;
    if (this.displayBoxIndex < 0)
      this.displayBoxIndex = 0;
    
    //oBoxCollection.removeClass(cssClass);    
    if(oBoxCollection.length > 0)
    {
      oBoxCollection.forEach(item => item.classList.remove(this.cssClass));
      let elemnt: HTMLElement =  oBoxCollection[this.displayBoxIndex]
      elemnt.scrollIntoView();
      elemnt.classList.add(this.cssClass);           
    }
  }
}