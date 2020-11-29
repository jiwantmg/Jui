import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items: any[] = [];
  title = 'jui-examples';  
  row = {};  
  ngOnInit(): void {
    this.items = [
      { id:"08d87e38-b506-46ba-8516-238cffde8c78", itemName:"Basmati Chamal", itemCode:"basmati chamal", isTaxable:true, maintainStock:false, minimumQuantity:0.0, availableStock:0.0 },
      { id:"08d8870e-a04a-4818-865e-9a0025715fb7", itemName:"Football", itemCode:"football", isTaxable:true, maintainStock:true, minimumQuantity:0.0, availableStock:0.0 },
      { id:"08d8879f-e9b7-434b-8a8e-4d3597bcf691", itemName:"Shoes", itemCode:"shoes", isTaxable:false, maintainStock:true, minimumQuantity:0.0, availableStock:3.41 },
      { id:"08d891df-8d18-4284-852d-c0ad3165b40b", itemName:"Cricket Bad MRF", itemCode:"cbad", isTaxable:true, maintainStock:true, minimumQuantity:0.0, availableStock:0.0 },
      { id:"08d891df-76e6-4f5d-8bf5-0d57845f6e2a", itemName:"Cricket Ball", itemCode:"cball", isTaxable:true, maintainStock:true, minimumQuantity:0.0, availableStock:0.0 },
      { id:"08d891df-ac20-49fb-87ac-739373e8f0e0", itemName:"Class 11 Book", itemCode:"book-11", isTaxable:true, maintainStock:true, minimumQuantity:0.0, availableStock:0.0 },
      { id:"08d891df-d14d-4e5b-8a86-1c0dcd2977b4", itemName:"School Tie", itemCode:"school tie", isTaxable:true, maintainStock:true, minimumQuantity:0.0, availableStock:0.0 },
      { id:"08d891df-e01d-4d7e-814f-07b6d9041249", itemName:"Curve plate", itemCode:"curve plate", isTaxable:true, maintainStock:true, minimumQuantity:0.0, availableStock:0.0 },
      { id:"08d891df-f0e3-4363-89ff-f5c2ff644306", itemName:"Photocopy", itemCode:"photocopy", isTaxable:false, maintainStock:false, minimumQuantity:0.0, availableStock:0.0 },
      { id:"08d89212-5074-4f82-8e7f-481ddfa18701", itemName:"Student Tie", itemCode:"tie", isTaxable:false, maintainStock:false, minimumQuantity:0.0, availableStock:0.0, },
      { id:"08d89214-a4e1-457d-83d2-1c97b4cef084", itemName:"Photo Frame", itemCode:"pf", isTaxable:false, maintainStock:false, minimumQuantity:0.0, availableStock:0.0 }
    ]
  }

  itemChanged(item)
  {
    console.log(item);
  }
}