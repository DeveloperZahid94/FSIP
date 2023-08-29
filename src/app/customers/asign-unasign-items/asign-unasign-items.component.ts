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

  searchTextUnAssigned:any='';
  selectAll: boolean = false;
  screenText:string='';

  searchTextAssg: string = '';
  selectAllAssg: boolean = false;


  constructor(private _customerService:CustomerServiceService){}

  ngOnInit(): void {
    this._customerService.screenText.subscribe(res=>{
      this.customText=res;
    })

  }

  /** to fetch which key need to be displayed
   * @param item  
   * @returns 
   */
  getKeyUnSelected(item: any): string {
    if (this.customText === 'users') {
      return item.userName;
    } else if(this.customText === 'forms'){
      return item.pageTypeCode;
    }else {
      return item.reason;
    }

  }
  

  /**
   *  to fetch which key need to be displayed for Selected Ones 
   * @param item 
   * @returns 
   */
    getKeyForSelected(item: any): string {
      if (this.customText === 'users') {
        return item.userName;
      }else if(this.customText === 'forms'){
          return item.pageTypeCode;
        }else{
        return item.reason;
      }
    }



    public toggleItemSelection(item: any) {
      item.selected = !item.selected;
    }
  
    public toggleAssignedSelection(item: any) {
      item.selected = !item.selected;
    }
  
    public toggleSelectAllUnAssigned() {
      this.selectAll = !this.selectAll;
      let flag = !this.selectAll;
      this.selectAll = flag;
      this.items.forEach(item => item.selected = flag);
    }

    // public toggleSelectAll2() {
    //   this.selectAllAssg = !this.selectAllAssg;
    //   let flag = !this.selectAllAssg;
    //   this.selectedItems.forEach(item => item.selected = flag);
    // }
  
/**
 * To Assign Checked Items and Emit the selected items to the parent component
 */
    public assignSelected() {
      const selectedForAssignment = this.items.filter(item => item.selected);
      this.selectedItems = this.selectedItems.concat(selectedForAssignment);
      this.items = this.items.filter(item => !item.selected);
      this.selectedItemsChanged.emit(this.selectedItems);
    }
  
/**
 * To UnAssign Checked Items and Emit the selected items to the parent component
 */
    public unassignSelected() {
      const selectedForUnassignment = this.selectedItems.filter(item => item.selected);
      this.items = this.items.concat(selectedForUnassignment);
      this.selectedItems = this.selectedItems.filter(item => !item.selected);
      this.selectedItemsChanged.emit(this.selectedItems);
    }


    
  

    
 
  


}
