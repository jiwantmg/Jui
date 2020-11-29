import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[libLekhaKeydown]'
})
export class LekhaKeydownDirective {
  @Output() public keyDownPressed = new EventEmitter();
  @Output() public onEnter = new EventEmitter();

  displayBoxIndex = -1;

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
        this.onEnter.emit(selected.textContent);      
    }
  }

  navigate(diff: number)
  {
    this.displayBoxIndex += diff;
    var oBoxCollection = this._elementRef.nativeElement.querySelectorAll('.item');
    if (this.displayBoxIndex >= oBoxCollection.length)
      this.displayBoxIndex = 0;
    if (this.displayBoxIndex < 0)
      this.displayBoxIndex = oBoxCollection.length - 1;
    
    //oBoxCollection.removeClass(cssClass);    
    if(oBoxCollection.length > 0)
    {
      oBoxCollection.forEach(item => item.classList.remove(this.cssClass));
      oBoxCollection[this.displayBoxIndex].classList.add(this.cssClass);
    }    
  }

}
