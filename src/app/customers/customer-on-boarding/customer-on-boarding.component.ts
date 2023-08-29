import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  dataSource :any[]=[];   //gets passed to the component 

  public customerList:any;
  public projectList:any;
  public userList:any;
  public reasonList:any;
  public pageList:any;
  public ScreenText:string=''
  public isActive: boolean = false;
  public selectedSearchType='users';

  // QUEues 

name: string = '';
selectedCondition: string = '';
result: string | null = null;

conditionOptions: any[] = [
  { value: 'containsSat', label: 'Name contains "sat"' },
  { value: 'startsWithAt', label: 'Name starts with "@"' }
];

constructor(
private dialog: MatDialog,
private _customerService:CustomerServiceService,
private _userService:UserServiceService,
private _projectService:ProjectServiceService,
private _reasonService:RejectionReasonServiceService,
private _pageService:PageTypeServiceService,
){}


  ngOnInit(){
    this.getProjects();
    this.getCustomers();
    this.getPageTypes();
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
      this.dataSource=res
    })
  }

  private getUsers(){
    this._userService.getUsers().subscribe((res:[])=>{
      console.log("Users",res);
      this.userList=res;
      this.dataSource=res
    })
  }

  private getReasons(){
    this._reasonService.getReject().subscribe((res:[])=>{
      console.log("reasons",res);
      this.reasonList=res;
      this.dataSource=res
    })
  }

  private getPageTypes(){
    this._pageService.getPageType().subscribe((res:[])=>{
      console.log(res);
      this.pageList=res;
      this.dataSource=res
    })
  }

  /**
   * To hanfle logic of assing data for User/Reason 
   */
  public onTabClicked(event:any){
    if (event.selectedIndex !== undefined) {
      console.log(`Step clicked: ${event.selectedIndex}`);
     
      switch(event.selectedIndex){
        case 2:{
          this._customerService.screenText.next('users');
          this.getUsers();
          break;
        }
        case 3:{
          this._customerService.screenText.next('reason');
          this.getReasons();
          break;
        }
        case 5:{
          this._customerService.screenText.next('forms');
          this.getPageTypes();
          break;
        }
        default:
          this._customerService.screenText.next('');
      }
    }
  }
  


  /**
   * getting data as Per Selection in the grid from child for User/Reason 
   */
  onSelectedItemsChanged(selectedItems: any[]) {
    console.log('Selected items: Parent', selectedItems);
  }


 /**
     * To Select Group User in dropdown or Not 
*/
  onSearchTypeSelected(searchType: string) {
    this.selectedSearchType = searchType;
    console.log(searchType)
    if (searchType === 'users') {
     this.getUsers();
    } else if (searchType === 'userGroups') {
      this.dataSource=[];
    }
  }


  /**
   * getting data as Per Selection in the coditional Queues from child 
   */
  onSelectedQueueChanged(selectedItems: any[]) {
    console.log('Selected items queues: Parent', selectedItems);
  }
}
