import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTypesRoutingModule } from './page-types-routing.module';
import { PageTypesComponent } from './page-types.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ViewPagesTypeListComponent } from './view-pages-type-list/view-pages-type-list.component';
import { AddEditPageTypeComponent } from './add-edit-page-type/add-edit-page-type.component';


@NgModule({
  declarations: [
    PageTypesComponent,
    ViewPagesTypeListComponent,
    AddEditPageTypeComponent
  ],
  imports: [
    CommonModule,
    PageTypesRoutingModule,
    LayoutModule,
    FormsModule,ReactiveFormsModule,
    MatInputModule,MatFormFieldModule,
    MatSelectModule,MatIconModule,MatButtonModule,
    MatDialogModule,MatRadioModule,
    MatPaginatorModule, MatTableModule,
  ]
})
export class PageTypesModule { }
