import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { AddRolesComponent } from './add-roles/add-roles.component';
import { ViewRolesListComponent } from './view-roles-list/view-roles-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';



@NgModule({
  declarations: [
    RolesComponent,
    AddRolesComponent,
    ViewRolesListComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    FormsModule,ReactiveFormsModule,
    MatInputModule,MatFormFieldModule,
    MatSelectModule,MatIconModule,MatButtonModule,
    MatDialogModule,MatToolbarModule,
    MatPaginatorModule, MatTableModule
  ]
})
export class RolesModule { }
