import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { UserServiceService } from 'src/app/users/user-service.service';
import { ProjectServiceService } from 'src/app/projects/project-service.service';
import { RejectionReasonServiceService } from 'src/app/rejection-reason/rejection-reason-service.service';
import { PageTypeServiceService } from 'src/app/page-types/page-type-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCustomersDialogComponent } from '../add-edit-customers-dialog/add-edit-customers-dialog.component';
import { AddEditProjectsComponent } from 'src/app/projects/add-edit-projects/add-edit-projects.component';

@Component({
  selector: 'app-customer-on-boarding',
  templateUrl: './customer-on-boarding.component.html',
  styleUrls: ['./customer-on-boarding.component.css']
})
export class CustomerOnBoardingComponent implements OnInit{
  public customerList:any;
  public projectList:any;
  public userList:any;
  public reasonList:any;
  public pageList:any;

constructor(
  private dialog: MatDialog,
private _customerService:CustomerServiceService,
private _userService:UserServiceService,
private _projectService:ProjectServiceService,
private _reasonService:RejectionReasonServiceService,
private _pageService:PageTypeServiceService
){}


  ngOnInit(){
    this.getProjects();
    this.getCustomers();
    this.getUsers();
    this.getReasons();
    this.getPageTypes()

  }


/** 
   * Method To Open Dialog For Add/Edit customer based on Action passed  
  */
public addAction(event:string,ele:any,target:string){
  if(target=='Customer'){
    return this.dialog.open(AddEditCustomersDialogComponent, {width: '50%', height: '350px',data:{Action:event,dataObj:ele}}).afterClosed()
    .subscribe(res => {
      if(res){
        this.getCustomers();
      }
        
    });
  }else{
    return this.dialog.open(AddEditProjectsComponent, {width: '50%', height: '350px',data:{Action:event,dataObj:ele}}).afterClosed()
    .subscribe(res => {
      if(res){
        this.projectList();
      }  
    });
  }
  
}


  private getProjects(){
    this._projectService.getProjects().subscribe((res:[])=>{
      console.log(res);
      this.projectList=res;
    })
  }

  private getCustomers(){
    this._customerService.getCustomers().subscribe((res:[])=>{
      console.log(res);
      this.customerList=res;
    })
  }

  private getUsers(){
    this._userService.getUsers().subscribe((res:[])=>{
      console.log(res);
      this.userList=res;
    })
  }

  private getReasons(){
    this._reasonService.getReject().subscribe((res:[])=>{
      console.log(res);
      this.reasonList=res;
    })
  }

  private getPageTypes(){
    this._pageService.getPageType().subscribe((res:[])=>{
      console.log(res);
      this.pageList=res;
    })
  }
}
