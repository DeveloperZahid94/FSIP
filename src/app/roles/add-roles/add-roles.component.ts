import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RolesServiceService } from '../roles-service.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.css']
})
export class AddRolesComponent implements OnInit {
  public rolesForm:any;
  public actionMessage:string='';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddRolesComponent>,
    private _rolesService:RolesServiceService,
    private _sBarService:SnackBarServiceService
    ){}
  


  ngOnInit(){
    this.generateFormElements();
    console.log(this.data);
    this.actionMessage=this.data.Action
  }


  /** 
   * Method To Generate Form Elements 
  */
  public generateFormElements(){
    this.rolesForm=new FormGroup({
      id:new FormControl(this.data.dataObj ? this.data.dataObj.id:null),
      roleName:new FormControl(this.data.dataObj ? this.data.dataObj.roleName:null,[Validators.required]),
      description:new FormControl(this.data.dataObj ? this.data.dataObj.description:null,Validators.required),
      created_At:new FormControl(this.data.dataObj ? this.data.dataObj.created_At:new Date()),
      updated_At:new FormControl(this.data.dataObj ? new Date():null),
      isActive:new FormControl(this.data.dataObj ? this.data.dataObj.isActive:'Yes')
    })
  }


  /** 
   * Method To Add/Update values  
  */
  public addUpdateRole(){
    console.log(this.rolesForm.value);
    if(this.data.Action==='Add'){
      this.addRole();
    }else{
      this.updateRole();
    }
    
  }

  /** 
   * Method To Add New Role Method Definition  
  */
  private addRole(){
    let rolesData=this.rolesForm.value;
    this._rolesService.postRoles(rolesData).subscribe((res:any[])=>{
      this._sBarService.openSnackBar('Role Added successfully!','done');
      this.rolesForm.reset();
    },err=>{
      console.log(err)
    })
  }

  /** 
   * Method To Update Role values Definition  
  */
  private updateRole(){
    let rolesData=this.rolesForm.value;
    let id=this.rolesForm.value.id;

    this._rolesService.updateRoles(id,rolesData).subscribe((res:any[])=>{
      this._sBarService.openSnackBar('Role Updated successfully!','done')
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
