import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QueuesServicesService } from '../queues-services.service';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditQueuesComponent } from '../add-edit-queues/add-edit-queues.component';
import { ConfirmationDialogComponent } from 'src/app/roles/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-view-queues-list',
  templateUrl: './view-queues-list.component.html',
  styleUrls: ['./view-queues-list.component.css']
})
export class ViewQueuesListComponent {
  public roleList:any=[];
  constructor(
    private dialog: MatDialog,
    private _queuesServices:QueuesServicesService,
    private _sBService:SnackBarServiceService 
    ){}

  displayedColumns: string[] = ['queueCode','queueName', 'description','queueType','roles','Action'];
  dataSource= new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(){
    this.queueList();
  }


/** 
   * Method To Open Dialog For Add/Edit Queue based on Action passed  
  */
  public queueAction(event:string,ele:any){
    return this.dialog.open(AddEditQueuesComponent, {width: '50%', height: '420px',data:{Action:event,dataObj:ele}}).afterClosed()
      .subscribe(res => {
        if(res){
          this.queueList();
        }
          
      });
  }

  /** 
   * Method To get List of Queue  
  */
  private queueList(){
    this._queuesServices.getQueues().subscribe(res=>{
      console.log(res);
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator;
    },err=>{
      console.log(err);
    })
  }


  /** 
   * Method To get delete  Queue  
  */
  public deleteQueue(id:number){
    return this.dialog.open(ConfirmationDialogComponent, {width: '30%', height: '210px',data:{Message:'Delete Queue'}}).afterClosed()
      .subscribe(res => {
        if(res==='Yes'){
          this._queuesServices.deleteQueues(id).subscribe(res=>{
            if(res){
              this._sBService.openSnackBar("Queue Deleted Successfully","done");
              this.queueList();
            }  
          },err=>{
            console.log(err);
          })
        }
      });
  }
  public getDescription(desc:string){
    return desc.slice(0,90);
  }
}
