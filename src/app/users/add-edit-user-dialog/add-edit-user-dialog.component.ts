import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-edit-user-dialog',
  templateUrl: './add-edit-user-dialog.component.html',
  styleUrls: ['./add-edit-user-dialog.component.css']
})
export class AddEditUserDialogComponent implements OnInit{
  public userForm:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddEditUserDialogComponent>,
    private _sBarService:SnackBarServiceService,
    private _userService:UserServiceService
  ){}
  
  ngOnInit(){
   this.generateFormElements();
   console.log(this.data)
  }



  /** 
   * Method To Generate Form Elements 
  */
  public generateFormElements(){
    this.userForm=new FormGroup({
      id:new FormControl(this.data?.dataObj ? this.data.dataObj.id:null),
      userName:new FormControl(this.data?.dataObj ? this.data.dataObj?.userName:null,[Validators.required]),
      firstName:new FormControl(this.data?.dataObj ? this.data.dataObj?.firstName:null,Validators.required),
      lastName:new FormControl(this.data?.dataObj ? this.data.dataObj?.lastName:null),
      email:new FormControl(this.data?.dataObj ? this.data.dataObj?.email:null),
      phone:new FormControl(this.data?.dataObj ? this.data.dataObj?.phone:null),
      domainName:new FormControl(this.data?.dataObj ? this.data.dataObj?.domainName:null),
      countryCode:new FormControl(this.data?.dataObj ? this.data.dataObj?.isActive:null),
      currencyCode:new FormControl(this.data?.dataObj ? this.data.dataObj?.isActive:null),
      createdAt:new FormControl(this.data?.dataObj ? this.data.dataObj?.createdAt:new Date()),
      updatedAt:new FormControl(this.data?.dataObj ? this.data.dataObj?.updatedAt:null),
      timeZone:new FormControl(this.data?.dataObj ? this.data.dataObj?.timeZone:null),
      defaultRoleId:new FormControl(this.data?.dataObj ? this.data.dataObj?.isActive:null),
      isActive:new FormControl(this.data?.dataObj ? this.data.dataObj?.isActive:null),
    })
  }

  /** 
   * Method To Add/Update values  
  */
  public addUpdateRole(){
    console.log(this.userForm.value);
    if(this.data.Action==='ADD'){
      this.addRole();
    }else{
      this.updateRole();
    }
    
  }

  /** 
   * Method To Add New Role Method Definition  
  */
  private addRole(){
    let rolesData=this.userForm.value;
    this._userService.postUsers(rolesData).subscribe((res:any[])=>{
      this._sBarService.openSnackBar('User Added successfully!','done');
      this.userForm.reset();
    },err=>{
      console.log(err)
    })
  }

  /** 
   * Method To Update Role values Definition  
  */
  private updateRole(){
    // let rolesData=this.rolesForm.value;
    // let id=this.rolesForm.value.id;

    // this._rolesService.updateRoles(id,rolesData).subscribe((res:any[])=>{
    //   this._sBarService.openSnackBar('Role Updated successfully!','done')
    //   this.dialogRef.close(true); 
    // },err=>{
    //   console.log(err)
    // })
  }




 /** 
   * Method To close Dialog  
  */  
  public closeDialog(){
    this.dialogRef.close(true);
  }

}
