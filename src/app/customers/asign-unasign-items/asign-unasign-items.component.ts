import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-asign-unasign-items',
  templateUrl: './asign-unasign-items.component.html',
  styleUrls: ['./asign-unasign-items.component.css']
})
export class AsignUnasignItemsComponent {
  @Input() items: any[] = [];   // Input property to receive data source from another component
  @Output() selectedItemsChanged = new EventEmitter<any[]>(); // Output property to emit selected items
  selectedItems:any[] = [];




  /** 
   * on selection the items From Grid @param item 
   */
  toggleItemSelection(item: any) {
    item.selected = !item.selected;
    if (item.selected) {
      this.selectedItems.push(item);
    } else {
      const index = this.selectedItems.findIndex(selectedItem => selectedItem.id === item.id);
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
      }
    }
  }
 
  
/**
 *  Emit the selected items to the parent component
 */
  show(){
    console.log("From Child",this.selectedItems);
    this.selectedItemsChanged.emit(this.selectedItems);
  }
}
