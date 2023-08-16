import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { AddEditProjectsComponent } from '../add-edit-projects/add-edit-projects.component';
import { ConfirmationDialogComponent } from 'src/app/roles/confirmation-dialog/confirmation-dialog.component';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-view-project-lists',
  templateUrl: './view-project-lists.component.html',
  styleUrls: ['./view-project-lists.component.css']
})
export class ViewProjectListsComponent {
  public roleList:any=[];
  constructor(
    private dialog: MatDialog,
    private _projectService:ProjectServiceService,
    private _sBService:SnackBarServiceService 
    ){}

  displayedColumns: string[] = ['customerId','projectCode', 'projectName','Action'];
  dataSource= new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(){
    this.projectList();
  }


/** 
   * Method To Open Dialog For Add/Edit Projects based on Action passed  
  */
  public projectAction(event:string,ele:any){
    return this.dialog.open(AddEditProjectsComponent, {width: '50%', height: '350px',data:{Action:event,dataObj:ele}}).afterClosed()
      .subscribe(res => {
        if(res){
          this.projectList();
        }
          
      });
  }

  /** 
   * Method To get List of Project  
  */
  private projectList(){
    this._projectService.getProjects().subscribe(res=>{
      console.log(res);
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator;
    },err=>{
      console.log(err);
    })
  }


  /** 
   * Method To get delete  Project  
  */
  public deleteProject(id:number){
    return this.dialog.open(ConfirmationDialogComponent, {width: '30%', height: '210px',data:{Message:'Delete Project'}}).afterClosed()
      .subscribe(res => {
        if(res==='Yes'){
          this._projectService.deleteProjects(id).subscribe(res=>{
            if(res){
              this._sBService.openSnackBar("Project Deleted Successfully","done");
              this.projectList();
            }  
          },err=>{
            console.log(err);
          })
        }
      });
  }
}
