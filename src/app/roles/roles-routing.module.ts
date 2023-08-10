import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles.component';
import { AddRolesComponent } from './add-roles/add-roles.component';
import { ViewRolesListComponent } from './view-roles-list/view-roles-list.component';

const routes: Routes = [
  { path: '', component: RolesComponent, 
  children:[
    {path:'viewRole',component:ViewRolesListComponent},
    {path:'**',component:ViewRolesListComponent},
  ]
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
