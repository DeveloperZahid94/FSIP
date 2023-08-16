import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { CustomerOnBoardingComponent } from './customer-on-boarding/customer-on-boarding.component';

const routes: Routes = [{ path: '', component: CustomersComponent, 
children:[
  {path:'viewCustomers',component:ViewCustomersComponent},
  {path:'customerOnBoard',component:CustomerOnBoardingComponent},
  {path:'**',component:ViewCustomersComponent},
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
