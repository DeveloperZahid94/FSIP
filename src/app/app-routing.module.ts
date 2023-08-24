import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'Roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) }, 
{ path: 'Users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
{ path: 'Customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
{ path: 'Projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
{ path: 'OcrEngines', loadChildren: () => import('./ocr-engines/ocr-engines.module').then(m => m.OcrEnginesModule) },
{ path: 'RejectionReason', loadChildren: () => import('./rejection-reason/rejection-reason.module').then(m => m.RejectionReasonModule) },
{ path: 'PageTypes', loadChildren: () => import('./page-types/page-types.module').then(m => m.PageTypesModule) },
{ path: 'Queues', loadChildren: () => import('./queues/queues.module').then(m => m.QueuesModule) },
{ path: 'FieldLibrary', loadChildren: () => import('./field-library/field-library.module').then(m => m.FieldLibraryModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
