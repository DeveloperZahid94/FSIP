import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-asign-unasign-items',
  templateUrl: './asign-unasign-items.component.html',
  styleUrls: ['./asign-unasign-items.component.css']
})
export class AsignUnasignItemsComponent implements OnInit {
  @Input() items: any[] = [];   // Input property to receive data source from another component
  @Input() customText:any= {};
  @Output() selectedItemsChanged = new EventEmitter<any[]>(); // Output property to emit selected items
  selectedItems:any[] = [];
  itemsToPush:any[] = [];

  searchText:any='';
  selectAll: boolean = false;
  screenText:string='';


  constructor(private _customerService:CustomerServiceService){}

  ngOnInit(): void {
    this._customerService.screenText.subscribe(res=>{
      this.customText=res;
    })
  }



  /** 
   * on selection the items From Grid @param item 
   */
  public toggleItemSelection(item: any) {
    item.selected = !item.selected;
    if (item.selected) {
      this.itemsToPush.push(item);
    } else {
      const index = this.itemsToPush.findIndex(selectedItem => selectedItem.id === item.id);
      if (index !== -1) {
        this.itemsToPush.splice(index, 1);
      }
    }
  }
 
  
  public toggleSelectAll() {
    this.selectAll = !this.selectAll;
    let flag=!this.selectAll;
    this.selectAll=flag
    this.items.forEach(item => item.selected = flag);
  }


/**
 * To Assign/UnAssign Checked Items
 */
  public asignUnAsign(){
    this.updateSelectedItems();
  }


/**
 *  Emit the selected items to the parent component
 */
    private updateSelectedItems() {
      this.selectedItems = this.items.filter(item => item.selected);
      this.selectedItemsChanged.emit(this.selectedItems);
    }


  /**
   * @param item to fech which key need to be displayed 
   * @returns 
   */
  getKeyUnSelected(item: any): string {
    if (this.customText === 'users') {
      return item.userName;
    } else {
      return item.reason;
    }
  }
  

    /**
   * 
   * @param item to fech which key need to be displayed for Selected Ones 
   * @returns 
   */
    getKeyForSelected(item: any): string {
      if (this.customText === 'users') {
        return item.userName;
      } else {
        return item.reason;
      }
    }

  
 
  


}
