import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'Roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) }, 
{ path: 'Users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
{ path: 'Customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
