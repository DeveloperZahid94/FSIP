import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldLibraryRoutingModule } from './field-library-routing.module';
import { FieldLibraryComponent } from './field-library.component';
import { AddEditFieldLibraryComponent } from './add-edit-field-library/add-edit-field-library.component';
import { ViewFieldListComponent } from './view-field-list/view-field-list.component';

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
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '../layout/layout.module';
import { NgxSliderModule } from 'ngx-slider-v2';


@NgModule({
  declarations: [
    FieldLibraryComponent,
    AddEditFieldLibraryComponent,
    ViewFieldListComponent
  ],
  imports: [
    CommonModule,
    FieldLibraryRoutingModule,
    LayoutModule,NgxSliderModule,
    FormsModule,ReactiveFormsModule,
    MatInputModule,MatFormFieldModule,
    MatSelectModule,MatIconModule,MatButtonModule,
    MatDialogModule,MatRadioModule,MatCheckboxModule,
    MatPaginatorModule, MatTableModule,MatSliderModule
  ]
})
export class FieldLibraryModule { }
