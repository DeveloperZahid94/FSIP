import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { ProjectServiceService } from '../project-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-projects',
  templateUrl: './add-edit-projects.component.html',
  styleUrls: ['./add-edit-projects.component.css']
})
export class AddEditProjectsComponent {
  public projectForm:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddEditProjectsComponent>,
    private _sBarService:SnackBarServiceService,
    private _projectService:ProjectServiceService
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
      customerId:new FormControl(this.data?.dataObj ? this.data.dataObj?.customerId:null,[Validators.required]),
      projectCode:new FormControl(this.data?.dataObj ? this.data.dataObj?.projectCode:null,[Validators.required]),
      projectName:new FormControl(this.data?.dataObj ? this.data.dataObj?.projectName:null,[Validators.required]),
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
    this._projectService.postProjects(rolesData).subscribe((res:any[])=>{
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

    this._projectService.updateProjects(id,userData).subscribe((res:any[])=>{
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
