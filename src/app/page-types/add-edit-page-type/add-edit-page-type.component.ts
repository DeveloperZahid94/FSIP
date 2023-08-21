import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { PageTypeServiceService } from '../page-type-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-page-type',
  templateUrl: './add-edit-page-type.component.html',
  styleUrls: ['./add-edit-page-type.component.css']
})
export class AddEditPageTypeComponent {
  public projectForm:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddEditPageTypeComponent>,
    private _sBarService:SnackBarServiceService,
    private _pageTypeService:PageTypeServiceService
  ){}
  
  ngOnInit(){
   this.generateFormElements();
   console.log(this.data)
  }



  /** 
   * Method To Generate Form Elements 
  */
  public generateFormElements(){
    this.projectForm=new FormGroup({
      id:new FormControl(this.data?.dataObj ? this.data.dataObj.id:null),
      pageTypeCode:new FormControl(this.data?.dataObj ? this.data.dataObj?.pageTypeCode:null,[Validators.required]),
      PageTypeName:new FormControl(this.data?.dataObj ? this.data.dataObj?.PageTypeName:null,[Validators.required]),
      description:new FormControl(this.data?.dataObj ? this.data.dataObj?.description:null,[Validators.required]),
      createdAt:new FormControl(this.data?.dataObj ? this.data.dataObj?.createdAt:new Date()),
      updatedAt:new FormControl(this.data?.dataObj ? new Date():null),
      isActive:new FormControl(this.data?.dataObj?.isActive || 1),
    })
  }

  /** 
   * Method To Add/Update values  
  */
  public addUpdateProject(){
    console.log(this.projectForm.value);
    if(this.data.Action==='Add'){
      this.addProject();
    }else{
      this.updateProject();
    }
    
  }

  /** 
   * Method To Add New User Definition  
  */
  private addProject(){
    let rolesData=this.projectForm.value;
    this._pageTypeService.postPageType(rolesData).subscribe((res:any[])=>{
      this._sBarService.openSnackBar('Project Added successfully!','done');
      this.projectForm.reset();
    },err=>{
      console.log(err)
    })
  }

  /** 
   * Method To Update User values Definition  
  */
  private updateProject(){
    let userData=this.projectForm.value;
    let id=this.projectForm.value.id;

    this._pageTypeService.updatePageType(id,userData).subscribe((res:any[])=>{
      this._sBarService.openSnackBar('Project Updated successfully!','done')
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

