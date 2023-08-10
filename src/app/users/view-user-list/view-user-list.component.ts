import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { RolesServiceService } from 'src/app/roles/roles-service.service';
import { AddEditUserDialogComponent } from '../add-edit-user-dialog/add-edit-user-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/roles/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-view-user-list',
  templateUrl: './view-user-list.component.html',
  styleUrls: ['./view-user-list.component.css']
})
export class ViewUserListComponent implements OnInit{
  public roleList:any=[];
  constructor(
    private dialog: MatDialog,
    private _rolesService:RolesServiceService,
    private _sBService:SnackBarServiceService 
    ){}
    
  displayedColumns: string[] = ['id', 'roleName', 'description', 'created_At','updated_At','isActive','Action'];
  dataSource= new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(){
    this.RoleList();
  }


  private RoleList(){
    this._rolesService.getRoles().subscribe(res=>{
      console.log(res);
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator;
    },err=>{
      console.log(err);
    })
  }

  /** 
   * Method To Open Dialog For Add/Edit Roles based on Action passed  
  */
  public userAction(event:string,ele:any){
    return this.dialog.open(AddEditUserDialogComponent, {width: '50%', height: '60%',data:{Action:event,dataObj:ele}}).afterClosed()
      .subscribe(res => {
        if(res){
          this.RoleList();
        }
          
      });
  }

  public deleteUser(id:number){
    return this.dialog.open(ConfirmationDialogComponent, {width: '30%', height: '20%',data:{Message:'Delete Role'}}).afterClosed()
      .subscribe(res => {
        if(res==='Yes'){
          this._rolesService.deleteRoles(id).subscribe(res=>{
            if(res){
              this._sBService.openSnackBar("Deleted Successfully","done");
              this.RoleList();
            }  
          },err=>{
            console.log(err);
          })
        }
      });
  }


}
