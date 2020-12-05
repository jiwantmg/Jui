import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'jui-autocomplete',
  templateUrl: 'jui-autocomplete.component.html',
  styles: [    
  ]
})
export class JuiAutocompleteComponent implements OnInit {
  @Input("dataSource") items: any[] = [];
  @Input("searchBy") searchBy = "";
  @Input("keyText") keyText = "";
  @Input("keyValue") keyValue = "";

  showDropDown = false;
  selectedRowId = "";

  @Output("onSelect") onSelect = new EventEmitter();
  searchString = "";
  searchValue = "";
  constructor() { }

  ngOnInit(): void {
  }

  toggleDropDown(target)
  {
    if(!this.showDropDown && target == "outside") return;
    // check if this drop down is opened or no
    this.showDropDown = !this.showDropDown;    
  }

  closeDropDown()
  {  
    //if(row.itemName && row.itemName.length > 2)
    this.showDropDown = false;
  }

  openDropDown()
  { 
    //if(row.itemName && row.itemName.length > 2)
    this.showDropDown = true;
  }  

  onEnterSelected(event)
  {
    let item = this.getSelectedItem(event);
    this.itemSelected(item);
  }  

  itemSelected(item)
  {        
    //this.itemChanged(row);    
    this.onSelect.emit(item);
    this.searchValue = item[this.keyText];
    this.toggleDropDown(undefined);
  }
   
  getSelectedItem(selectedItem: string) {
    // find key
    return this.items.find(item => item[this.keyValue] === selectedItem[this.keyValue]);
  }
}