import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { ConfirmationDialogComponent } from 'src/app/roles/confirmation-dialog/confirmation-dialog.component';
import { RejectionReasonServiceService } from '../rejection-reason-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditRejectionReasonComponent } from '../add-edit-rejection-reason/add-edit-rejection-reason.component';

@Component({
  selector: 'app-view-rejection-reason-lists',
  templateUrl: './view-rejection-reason-lists.component.html',
  styleUrls: ['./view-rejection-reason-lists.component.css']
})
export class ViewRejectionReasonListsComponent {

  constructor(
    private dialog: MatDialog,
    private _rejectService:RejectionReasonServiceService,
    private _sBService:SnackBarServiceService 
    ){}

  displayedColumns: string[] = ['rejectCode','reason', 'description','Action'];
  dataSource= new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(){
    this.rejectReasonList();
  }


/** 
   * Method To Open Dialog For Add/Edit Rejection based on Action passed  
  */
  public rejectReasonAction(event:string,ele:any){
    return this.dialog.open(AddEditRejectionReasonComponent, {width: '50%', height: '370px',data:{Action:event,dataObj:ele}}).afterClosed()
      .subscribe(res => {
        if(res){
          this.rejectReasonList();
        }
          
      });
  }

  /** 
   * Method To get List of Rejection  
  */
  private rejectReasonList(){
    this._rejectService.getReject().subscribe(res=>{
      console.log(res);
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator;
    },err=>{
      console.log(err);
    })
  }


  /** 
   * Method To get delete  Rejection  
  */
  public deleteRejectReason(id:number){
    return this.dialog.open(ConfirmationDialogComponent, {width: '30%', height: '210px',data:{Message:'Delete Rejection'}}).afterClosed()
      .subscribe(res => {
        if(res==='Yes'){
          this._rejectService.deleteReject(id).subscribe(res=>{
            if(res){
              this._sBService.openSnackBar("Rejection Deleted Successfully","done");
              this.rejectReasonList();
            }  
          },err=>{
            console.log(err);
          })
        }
      });
  }
}
