import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RejectionReasonComponent } from './rejection-reason.component';
import { ViewRejectionReasonListsComponent } from './view-rejection-reason-lists/view-rejection-reason-lists.component';

const routes: Routes = [
  { path: '', component: RejectionReasonComponent,
  children:[
    {path:'viewRejectionList',component:ViewRejectionReasonListsComponent},
    {path:'**',component:ViewRejectionReasonListsComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RejectionReasonRoutingModule { }
