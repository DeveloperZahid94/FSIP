import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RejectionReasonRoutingModule } from './rejection-reason-routing.module';
import { RejectionReasonComponent } from './rejection-reason.component';
import { AddEditRejectionReasonComponent } from './add-edit-rejection-reason/add-edit-rejection-reason.component';
import { ViewRejectionReasonListsComponent } from './view-rejection-reason-lists/view-rejection-reason-lists.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    RejectionReasonComponent,
    AddEditRejectionReasonComponent,
    ViewRejectionReasonListsComponent
  ],
  imports: [
    CommonModule,
    RejectionReasonRoutingModule,
    LayoutModule,
    FormsModule,ReactiveFormsModule,
    MatInputModule,MatFormFieldModule,
    MatSelectModule,MatIconModule,MatButtonModule,
    MatDialogModule,MatRadioModule,
    MatPaginatorModule, MatTableModule,
  ]
})
export class RejectionReasonModule { }
