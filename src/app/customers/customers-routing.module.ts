import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { CustomerOnBoardingComponent } from './customer-on-boarding/customer-on-boarding.component';

const routes: Routes = [{ path: '', component: CustomersComponent, 
children:[
  {path:'viewCustomers',component:ViewCustomersComponent ,data: { breadcrumb: 'view' }},
  {path:'customerOnBoard',component:CustomerOnBoardingComponent,data: { breadcrumb: 'onBoad' }},
  {path:'**',component:ViewCustomersComponent},
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
