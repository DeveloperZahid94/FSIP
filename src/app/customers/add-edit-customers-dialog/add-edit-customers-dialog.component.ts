import { Component,Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { AddEditUserDialogComponent } from 'src/app/users/add-edit-user-dialog/add-edit-user-dialog.component';
import { UserServiceService } from 'src/app/users/user-service.service';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-add-edit-customers-dialog',
  templateUrl: './add-edit-customers-dialog.component.html',
  styleUrls: ['./add-edit-customers-dialog.component.css']
})
export class AddEditCustomersDialogComponent implements OnInit {
  public customerForm:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddEditUserDialogComponent>,
    private _sBarService:SnackBarServiceService,
    private _customerService:CustomerServiceService
  ){}
  
  ngOnInit(){
   this.generateFormElements();
   console.log(this.data)
  }



  /** 
   * Method To Generate Form Elements 
  */
  public generateFormElements(){
    this.customerForm=new FormGroup({
      id:new FormControl(this.data?.dataObj ? this.data.dataObj.id:null),
      customerCode:new FormControl(this.data?.dataObj ? this.data.dataObj?.customerCode:null,[Validators.required]),
      customerName:new FormControl(this.data?.dataObj ? this.data.dataObj?.customerName:null,[Validators.required]),
      createdAt:new FormControl(this.data?.dataObj ? this.data.dataObj?.createdAt:new Date()),
      updatedAt:new FormControl(this.data?.dataObj ? new Date():null),
      isActive:new FormControl(this.data?.dataObj?.isActive || 1),
    })
  }

  /** 
   * Method To Add/Update values  
  */
  public addUpdateCustomer(){
    console.log(this.customerForm.value);
    if(this.data.Action==='Add'){
      this.addCustomers();
    }else{
      this.updateCustomer();
    }
    
  }

  /** 
   * Method To Add New User Definition  
  */
  private addCustomers(){
    debugger;
    let rolesData=this.customerForm.value;
    this._customerService.postCustomers(rolesData).subscribe((res:any[])=>{
      this._sBarService.openSnackBar('User Added successfully!','done');
      this.customerForm.reset();
    },err=>{
      console.log(err)
    })
  }

  /** 
   * Method To Update User values Definition  
  */
  private updateCustomer(){
    let userData=this.customerForm.value;
    let id=this.customerForm.value.id;

    this._customerService.updateCustomers(id,userData).subscribe((res:any[])=>{
      this._sBarService.openSnackBar('User Updated successfully!','done')
      this.dialogRef.close(true); 
    },err=>{
      console.log(err)
    })
  }




 /** 
   * Method To close Dialog  
  */  
  public closeDialog(){
    this.dialogRef.close(true);
  }

}
