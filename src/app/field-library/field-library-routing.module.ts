import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldLibraryComponent } from './field-library.component';
import { ViewFieldListComponent } from './view-field-list/view-field-list.component';

const routes: Routes = [{ path: '', component: FieldLibraryComponent, 
children:[
  {path:'viewFields',component:ViewFieldListComponent},
  {path:'**',component:ViewFieldListComponent},
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldLibraryRoutingModule { }
