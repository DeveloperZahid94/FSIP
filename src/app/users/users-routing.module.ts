import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ViewUserListComponent } from './view-user-list/view-user-list.component';

const routes: Routes = [{ path: '', component: UsersComponent, 
children:[
  {path:'viewUsers',component:ViewUserListComponent},
  {path:'**',component:ViewUserListComponent},
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
