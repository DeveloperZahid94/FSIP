import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { CustomerServiceService } from 'src/app/customers/customer-service.service';
import { QueuesServicesService } from '../queues-services.service';
import { RolesServiceService } from 'src/app/roles/roles-service.service';

@Component({
  selector: 'app-add-edit-queues',
  templateUrl: './add-edit-queues.component.html',
  styleUrls: ['./add-edit-queues.component.css']
})
export class AddEditQueuesComponent {
  public queueForm:any;
  public roles:any[] = [];
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddEditQueuesComponent>,
    private _sBarService:SnackBarServiceService,
    private _queueService:QueuesServicesService,
    private _roleServ:RolesServiceService,
    private fb: FormBuilder
  ){}
  
  ngOnInit(){
    this.getRoles();
   this.generateFormElements();
   console.log(this.data)
  }



  /** 
   * Method To Generate Form Elements 
  */
  public generateFormElements(){
    this.queueForm=this.fb.group({
      id:new FormControl(this.data?.dataObj ? this.data.dataObj.id:null),
      queueCode:new FormControl(this.data?.dataObj ? this.data.dataObj?.queueCode:null,[Validators.required]),
      queueName:new FormControl(this.data?.dataObj ? this.data.dataObj?.queueName:null,[Validators.required]),
      description:new FormControl(this.data?.dataObj ? this.data.dataObj?.description:null,[Validators.required]),
      roles:new FormControl(this.data?.dataObj ? this.data.dataObj?.roles:[],[Validators.required]),
      queueType:new FormControl(this.data?.dataObj ? this.data.dataObj?.queueType:null,[Validators.required]),
      createdAt:new FormControl(this.data?.dataObj ? this.data.dataObj?.createdAt:new Date()),
      updatedAt:new FormControl(this.data?.dataObj ? new Date():null),
      isActive:new FormControl(this.data?.dataObj?.isActive || 1),
      // selectedRoles:new FormControl([]),
    })
  }

  private getRoles(){
    this._roleServ.getRoles().subscribe((res:any[])=>{
      this.roles=res;
      console.log(this.roles)
    });
  }


  /** 
   * Method To Add/Update values  
  */
  public addUpdateQueue(){
    console.log(this.queueForm.value);
    if(this.data.Action==='Add'){
      this.addQueue();
    }else{
      this.updateQueue();
    }
    
  }

  /** 
   * Method To Add New Queue Definition  
  */
  private addQueue(){
    let queueData=this.queueForm.value;
    this._queueService.postQueues(queueData).subscribe((res:any[])=>{
      this._sBarService.openSnackBar('Queue Added successfully!','done');
      this.queueForm.reset();
    },err=>{
      console.log(err)
    })
  }

  /** 
   * Method To Update Queue values Definition  
  */
  private updateQueue(){
    let userData=this.queueForm.value;
    let id=this.queueForm.value.id;

    this._queueService.updateQueues(id,userData).subscribe((res:any[])=>{
      this._sBarService.openSnackBar('Queue Updated successfully!','done')
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
