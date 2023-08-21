import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { OcrEnginesServiceService } from '../ocr-engines-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-ocr-engine',
  templateUrl: './add-edit-ocr-engine.component.html',
  styleUrls: ['./add-edit-ocr-engine.component.css']
})
export class AddEditOcrEngineComponent {
  public OCREngineForm:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddEditOcrEngineComponent>,
    private _sBarService:SnackBarServiceService,
    private _ocrEngineService:OcrEnginesServiceService
  ){}
  
  ngOnInit(){
   this.generateFormElements();
   console.log(this.data)
  }



  /** 
   * Method To Generate Form Elements 
  */
  public generateFormElements(){
    this.OCREngineForm=new FormGroup({
      id:new FormControl(this.data?.dataObj ? this.data.dataObj.id:null),
      engineCode:new FormControl(this.data?.dataObj ? this.data.dataObj?.engineCode:null,[Validators.required]),
      engineName:new FormControl(this.data?.dataObj ? this.data.dataObj?.engineName:null,[Validators.required]),
      description:new FormControl(this.data?.dataObj ? this.data.dataObj?.description:null,[Validators.required]),
      createdAt:new FormControl(this.data?.dataObj ? this.data.dataObj?.createdAt:new Date()),
      updatedAt:new FormControl(this.data?.dataObj ? new Date():null),
      isActive:new FormControl(this.data?.dataObj?.isActive || 1),
    })
  }

  /** 
   * Method To Add/Update values  
  */
  public addUpdateOCREngine(){
    console.log(this.OCREngineForm.value);
    if(this.data.Action==='Add'){
      this.addOCREngine();
    }else{
      this.updateOCREngine();
    }
    
  }

  /** 
   * Method To Add New User Definition  
  */
  private addOCREngine(){
    let rolesData=this.OCREngineForm.value;
    this._ocrEngineService.postOCREngines(rolesData).subscribe((res:any[])=>{
      this._sBarService.openSnackBar('OCR-Engine Added successfully!','done');
      this.OCREngineForm.reset();
    },err=>{
      console.log(err)
    })
  }

  /** 
   * Method To Update User values Definition  
  */
  private updateOCREngine(){
    let userData=this.OCREngineForm.value;
    let id=this.OCREngineForm.value.id;

    this._ocrEngineService.updateOCREngines(id,userData).subscribe((res:any[])=>{
      this._sBarService.openSnackBar('OCR-Engine Updated successfully!','done')
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
