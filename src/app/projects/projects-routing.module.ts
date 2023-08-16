import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ViewProjectListsComponent } from './view-project-lists/view-project-lists.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent ,
  children:[
    {path:'viewProjects',component:ViewProjectListsComponent},
    {path:'**',component:ViewProjectListsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
