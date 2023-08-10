import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ViewUserListComponent } from './view-user-list/view-user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddEditUserDialogComponent } from './add-edit-user-dialog/add-edit-user-dialog.component';




@NgModule({
  declarations: [
    UsersComponent,
    ViewUserListComponent,
    AddEditUserDialogComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,ReactiveFormsModule,
    MatInputModule,MatFormFieldModule,
    MatSelectModule,MatIconModule,MatButtonModule,
    MatDialogModule,MatToolbarModule,
    MatPaginatorModule, MatTableModule,
    MatSnackBarModule
  ]
})
export class UsersModule { }
