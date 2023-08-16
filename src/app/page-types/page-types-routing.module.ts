import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTypesComponent } from './page-types.component';
import { ViewPagesTypeListComponent } from './view-pages-type-list/view-pages-type-list.component';

const routes: Routes = [
  { path: '', component: PageTypesComponent ,
  children:[
    {path:'viewPageTypes',component:ViewPagesTypeListComponent},
    {path:'**',component:ViewPagesTypeListComponent},
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageTypesRoutingModule { }
