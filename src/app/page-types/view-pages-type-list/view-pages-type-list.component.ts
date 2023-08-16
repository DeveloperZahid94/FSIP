import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageTypeServiceService } from '../page-type-service.service';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditPageTypeComponent } from '../add-edit-page-type/add-edit-page-type.component';
import { ConfirmationDialogComponent } from 'src/app/roles/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-view-pages-type-list',
  templateUrl: './view-pages-type-list.component.html',
  styleUrls: ['./view-pages-type-list.component.css']
})
export class ViewPagesTypeListComponent {
  public roleList:any=[];
  constructor(
    private dialog: MatDialog,
    private _ppageTypeService:PageTypeServiceService,
    private _sBService:SnackBarServiceService 
    ){}

  displayedColumns: string[] = ['pageTypeCode','PageTypeName', 'description','Action'];
  dataSource= new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(){
    this.projectList();
  }


/** 
   * Method To Open Dialog For Add/Edit PageType based on Action passed  
  */
  public pageTypeAction(event:string,ele:any){
    return this.dialog.open(AddEditPageTypeComponent, {width: '50%', height: '57%',data:{Action:event,dataObj:ele}}).afterClosed()
      .subscribe(res => {
        if(res){
          this.projectList();
        }
          
      });
  }

  /** 
   * Method To get List of PageType  
  */
  private projectList(){
    this._ppageTypeService.getPageType().subscribe(res=>{
      console.log(res);
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator;
    },err=>{
      console.log(err);
    })
  }


  /** 
   * Method To get delete  PageType  
  */
  public deletePageType(id:number){
    return this.dialog.open(ConfirmationDialogComponent, {width: '30%', height: '210px',data:{Message:'Delete PageType'}}).afterClosed()
      .subscribe(res => {
        if(res==='Yes'){
          this._ppageTypeService.deletePageType(id).subscribe(res=>{
            if(res){
              this._sBService.openSnackBar("PageType Deleted Successfully","done");
              this.projectList();
            }  
          },err=>{
            console.log(err);
          })
        }
      });
  }
}
