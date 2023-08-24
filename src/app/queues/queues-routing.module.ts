import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueuesComponent } from './queues.component';
import { ViewQueuesListComponent } from './view-queues-list/view-queues-list.component';

const routes: Routes = [{ path: '', component: QueuesComponent,
children:[
  {path:'viewQueues',component:ViewQueuesListComponent},
  {path:'**',component:ViewQueuesListComponent},
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueuesRoutingModule { }
