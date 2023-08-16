import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { RolesServiceService } from 'src/app/roles/roles-service.service';
import { AddEditCustomersDialogComponent } from '../add-edit-customers-dialog/add-edit-customers-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/roles/confirmation-dialog/confirmation-dialog.component';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit{

  public roleList:any=[];
  constructor(
    private dialog: MatDialog,
    private _customerService:CustomerServiceService,
    private _sBService:SnackBarServiceService 
    ){}

  displayedColumns: string[] = [ 'customerCode','customerName','Action'];
  dataSource= new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(){
    this.customersList();
  }


/** 
   * Method To Open Dialog For Add/Edit customer based on Action passed  
  */
  public customerAction(event:string,ele:any){
    return this.dialog.open(AddEditCustomersDialogComponent, {width: '50%', height: '350px',data:{Action:event,dataObj:ele}}).afterClosed()
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
