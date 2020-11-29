import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'jui-autocomplete',
  templateUrl: 'jui-autocomplete.component.html',
  styles: [
    `
    .search-container {
        width: 100%;
        input {
            width: 100%;
        }
    }
    
    .item-container-dropdown {
        position: absolute;
        z-index: 500;    
        max-height: 300px;
        background-color: #F6F6F6;
        width: 100%;
        overflow-y: auto;    
    }
    
    .item-container-dropdown .item {
        padding: 2px 10px;
    }

    .item-container-dropdown .item:hover {
        color: blue;
        font-weight: bold;
        cursor: pointer;
        background-color: #d0c8c8;
    }
    
    .display_box_hover {
        background:#3b5998;
        color:#FFFFFF;
      }
      `
  ]
})
export class JuiAutocompleteComponent implements OnInit {
  @Input("dataSource") items: any[] = [];
  @Input("row") row: any = {id: 1};  
  showDropDown = false;
  selectedRowId = "";

  @Output("onSelect") onSelect = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleDropDown(target, rowId)
  {
    this.selectedRowId = rowId;
    if(!this.showDropDown && target == "outside") return;
    // check if this drop down is opened or no
    this.showDropDown = !this.showDropDown;    
  }

  closeDropDown(row)
  {
    if(!row) row = {};
    this.selectedRowId = row.id;
    //if(row.itemName && row.itemName.length > 2)
    this.showDropDown = false;
  }

  openDropDown(row)
  { 
    if(!row) row = {};
    this.selectedRowId = row.id;
    //if(row.itemName && row.itemName.length > 2)
    this.showDropDown = true;
  }  

  onEnterSelected(event, row)
  {
    let item = this.getSelectedItemByName(event);
    this.itemSelected(row, item);
  }  

  itemSelected(row, item)
  {    
    row.itemName = item.itemName;
    row.item = item;    
    //this.itemChanged(row);    
    this.onSelect.emit(item);
    this.toggleDropDown(undefined, row.id);
  }
   
  getSelectedItemByName(selectedName: string) {
    return this.items.find(item => item.itemName === selectedName);
  }
}
