import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';
import { RolesServiceService } from 'src/app/roles/roles-service.service';
import { AddEditUserDialogComponent } from '../add-edit-user-dialog/add-edit-user-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/roles/confirmation-dialog/confirmation-dialog.component';
import { UserServiceService } from '../user-service.service';

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
    private _userService:UserServiceService,
    private _sBService:SnackBarServiceService,
    ){}
    
   displayedColumns: string[] = ['userName', 'firstName', 'lastName','email','phone','countryCode','locationCode','manager','Action'];
   //displayedColumns: string[] = ['id', 'userName', 'firstName', 'lastName'];
  
  dataSource= new MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(){
    this.userList();
  }


  private userList(){
    this._userService.getUsers().subscribe(res=>{
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
    return this.dialog.open(AddEditUserDialogComponent, {width: '90%', height: '620px',data:{Action:event,dataObj:ele}}).afterClosed()
      .subscribe(res => {
        if(res){
          this.userList();
        }
          
      });
  }

  /** 
   * Method To Open Dialog For Add/Edit Roles based on Action passed  
  */
  public deleteUser(id:number){
    return this.dialog.open(ConfirmationDialogComponent, {width: '30%', height: '210px',data:{Message:'Delete User'}}).afterClosed()
      .subscribe(res => {
        if(res==='Yes'){
          this._userService.deleteUsers(id).subscribe(res=>{
            if(res){
              this._sBService.openSnackBar("User Deleted Successfully","done");
              this.userList();
            }  
          },err=>{
            console.log(err);
          })
        }
      });
  }


}
