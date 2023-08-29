import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { FieldServiceService } from '../field-service.service';

@Component({
  selector: 'app-add-edit-field-library',
  templateUrl: './add-edit-field-library.component.html',
  styleUrls: ['./add-edit-field-library.component.css']
})
export class AddEditFieldLibraryComponent {
  public fieldForm:any;
  sliderValue: number = 0;




  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddEditFieldLibraryComponent>,
    private _sBarService:SnackBarServiceService,
    private _fieldService:FieldServiceService,
    private fb: FormBuilder
  ){}
  
  ngOnInit(){
   
   this.generateFormElements();
   console.log(this.data)
  }



  updateSliderValue(event: any): void {
    this.sliderValue = event.target.value;
  }

  /** 
   * Method To Generate Form Elements 
  */
  public generateFormElements(){
    this.fieldForm=this.fb.group({
      id:new FormControl(this.data?.dataObj ? this.data.dataObj.id:null),
      fieldLabel:new FormControl(this.data?.dataObj ? this.data.dataObj?.queueCode:null,[Validators.required]),
      fieldName:new FormControl(this.data?.dataObj ? this.data.dataObj?.fieldName:null,[Validators.required]),
      placeholder:new FormControl(this.data?.dataObj ? this.data.dataObj?.placeholder:null,[Validators.required]),
      allowedChar:new FormControl(this.data?.dataObj ? this.data.dataObj?.allowedChar:null,[Validators.required]),
      notAllowedChar:new FormControl(this.data?.dataObj ? this.data.dataObj?.allowedChar:null,[Validators.required]),
      multiSelect:new FormControl(this.data?.dataObj ? this.data.dataObj?.multiSelect:null,[Validators.required]),
      required:new FormControl(this.data?.dataObj ? this.data.dataObj?.required:null,[Validators.required]),
      readOnly:new FormControl(this.data?.dataObj ? this.data.dataObj?.readOnly:null,[Validators.required]),
      maxRange:new FormControl(this.data?.dataObj ? this.data.dataObj?.maxRange:null,[Validators.required]),
      minRange:new FormControl(this.data?.dataObj ? this.data.dataObj?.minRange:null,[Validators.required]),
      minLength:new FormControl(this.data?.dataObj ? this.data.dataObj?.minLength:null,[Validators.required]),
      maxLength:new FormControl(this.data?.dataObj ? this.data.dataObj?.maxLength:null,[Validators.required]),
      controlType:new FormControl(this.data?.dataObj ? this.data.dataObj?.controlType:null,[Validators.required]),
      dataType:new FormControl(this.data?.dataObj ? this.data.dataObj?.dataType:null,[Validators.required]),
      validRegx:new FormControl(this.data?.dataObj ? this.data.dataObj?.validRegx:null,[Validators.required]),
      createdAt:new FormControl(this.data?.dataObj ? this.data.dataObj?.createdAt:new Date()),
      updatedAt:new FormControl(this.data?.dataObj ? new Date():null),
      isActive:new FormControl(this.data?.dataObj?.isActive || 1),
      slider:[0],
      // selectedRoles:new FormControl([]),
    })
  }


  /** 
   * Method To Add/Update values  
  */
  public addUpdateField(){
    console.log(this.fieldForm.value);
    if(this.data.Action==='Add'){
      this.addField();
    }else{
      this.updateQueue();
    }
    
  }

  /** 
   * Method To Add New Field Definition  
  */
  private addField(){
    let fieldData=this.fieldForm.value;
    this._fieldService.postField(fieldData).subscribe((res:any[])=>{
      this._sBarService.openSnackBar('Field Added successfully!','done');
      this.fieldForm.reset();
    },err=>{
      console.log(err)
    })
  }

  /** 
   * Method To Update Field values Definition  
  */
  private updateQueue(){
    let userData=this.fieldForm.value;
    let id=this.fieldForm.value.id;

    this._fieldService.updateField(id,userData).subscribe((res:any[])=>{
      this._sBarService.openSnackBar('Field Updated successfully!','done')
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
