import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddRolesComponent } from '../add-roles/add-roles.component';
import { RolesServiceService } from '../roles-service.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { SnackBarServiceService } from 'src/app/Core/snack-bar-service.service';

@Component({
  selector: 'app-view-roles-list',
  templateUrl: './view-roles-list.component.html',
  styleUrls: ['./view-roles-list.component.css']
})
export class ViewRolesListComponent implements OnInit,AfterViewInit {
  public roleList:any=[];
  constructor(private dialog: MatDialog,private _rolesService:RolesServiceService,
    private _sBService:SnackBarServiceService 
    ){}

  displayedColumns: string[] = ['roleName', 'description','Action'];
  dataSource= new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
     //this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit(){
    this.RoleList();
  }


/** 
   * Method To Open Dialog For Add/Edit Roles based on Action passed  
  */
  public roleAction(event:string,ele:any){
    return this.dialog.open(AddRolesComponent, {width: '50%', height: '390px',data:{Action:event,dataObj:ele}}).afterClosed()
      .subscribe(res => {
        if(res){
          this.RoleList();
        }
          
      });
  }

  /** 
   * Method To get List of roles  
  */
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
   * Method To get delete  roles  
  */
  public deleteRole(id:number){
    return this.dialog.open(ConfirmationDialogComponent, {width: '30%', height: '210px',data:{Message:'Delete Role'}}).afterClosed()
      .subscribe(res => {
        if(res==='Yes'){
          this._rolesService.deleteRoles(id).subscribe(res=>{
            if(res){
              this._sBService.openSnackBar("Role Deleted Successfully","done");
              this.RoleList();
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
