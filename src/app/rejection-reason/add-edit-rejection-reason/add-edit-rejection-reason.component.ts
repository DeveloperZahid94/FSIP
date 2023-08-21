import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { RejectionReasonServiceService } from '../rejection-reason-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-rejection-reason',
  templateUrl: './add-edit-rejection-reason.component.html',
  styleUrls: ['./add-edit-rejection-reason.component.css']
})
export class AddEditRejectionReasonComponent {
  public rejectReasonForm:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddEditRejectionReasonComponent>,
    private _sBarService:SnackBarServiceService,
    private _rejectReasonService:RejectionReasonServiceService
  ){}
  
  ngOnInit(){
   this.generateFormElements();
   console.log(this.data)
  }



  /** 
   * Method To Generate Form Elements 
  */
  public generateFormElements(){
    this.rejectReasonForm=new FormGroup({
      id:new FormControl(this.data?.dataObj ? this.data.dataObj.id:null),
      rejectCode:new FormControl(this.data?.dataObj ? this.data.dataObj?.rejectCode:null,[Validators.required]),
      reason:new FormControl(this.data?.dataObj ? this.data.dataObj?.reason:null,[Validators.required]),
      description:new FormControl(this.data?.dataObj ? this.data.dataObj?.description:null,[Validators.required]),
      createdAt:new FormControl(this.data?.dataObj ? this.data.dataObj?.createdAt:new Date()),
      updatedAt:new FormControl(this.data?.dataObj ? new Date():null),
      isActive:new FormControl(this.data?.dataObj?.isActive || 1),
    })
  }

  /** 
   * Method To Add/Update rejectReason values  
  */
  public addUpdateRejection(){
    console.log(this.rejectReasonForm.value);
    if(this.data.Action==='Add'){
      this.addRejection();
    }else{
      this.updateRejection();
    }
    
  }

  /** 
   * Method To Add New rejectReason Definition  
  */
  private addRejection(){
    let rolesData=this.rejectReasonForm.value;
    this._rejectReasonService.postReject(rolesData).subscribe((res:any[])=>{
      this._sBarService.openSnackBar('Rejection Added successfully!','done');
      this.rejectReasonForm.reset();
    },err=>{
      console.log(err)
    })
  }

  /** 
   * Method To Update rejectReason values Definition  
  */
  private updateRejection(){
    let userData=this.rejectReasonForm.value;
    let id=this.rejectReasonForm.value.id;

    this._rejectReasonService.updateReject(id,userData).subscribe((res:any[])=>{
      this._sBarService.openSnackBar('Rejection Updated successfully!','done')
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
