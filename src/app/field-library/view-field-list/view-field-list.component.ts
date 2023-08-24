import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { AddEditFieldLibraryComponent } from '../add-edit-field-library/add-edit-field-library.component';
import { CustomerServiceService } from 'src/app/customers/customer-service.service';
import { ConfirmationDialogComponent } from 'src/app/roles/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-view-field-list',
  templateUrl: './view-field-list.component.html',
  styleUrls: ['./view-field-list.component.css']
})
export class ViewFieldListComponent {
  public roleList:any=[];
  constructor(
    private dialog: MatDialog,
    private _customerService:CustomerServiceService,
    private _sBService:SnackBarServiceService 
    ){}

  displayedColumns: string[] = [ 'FieldLabel','FieldName','DataType','Action'];
  dataSource= new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(){
    // this.customersList();
  }


/** 
* Method To Open Dialog For Add/Edit customer based on Action passed  
*/
  public customerAction(event:string,ele:any){
    return this.dialog.open(AddEditFieldLibraryComponent, {width: '50%', height: '350px',data:{Action:event,dataObj:ele}}).afterClosed()
      .subscribe(res => {
        if(res){
          this.customersList();
        }
          
      });
  }

  /** 
   * Method To get List of customer  
  */
  private customersList(){
    this._customerService.getCustomers().subscribe(res=>{
      console.log(res);
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator;
    },err=>{
      console.log(err);
    })
  }


  /** 
   * Method To get delete  customer  
  */
  public deleteCustomer(id:number){
    return this.dialog.open(ConfirmationDialogComponent, {width: '30%', height: '210px',data:{Message:'Delete Customer'}}).afterClosed()
      .subscribe(res => {
        if(res==='Yes'){
          this._customerService.deleteCustomers(id).subscribe(res=>{
            if(res){
              this._sBService.openSnackBar("Customer Deleted Successfully","done");
              this.customersList();
            }  
          },err=>{
            console.log(err);
          })
        }
      });
  }
}
