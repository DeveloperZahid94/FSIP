import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OcrEnginesRoutingModule } from './ocr-engines-routing.module';
import { OcrEnginesComponent } from './ocr-engines.component';
import { AddEditOcrEngineComponent } from './add-edit-ocr-engine/add-edit-ocr-engine.component';
import { ViewOcrEngineListsComponent } from './view-ocr-engine-lists/view-ocr-engine-lists.component';
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


@NgModule({
  declarations: [
    OcrEnginesComponent,
    AddEditOcrEngineComponent,
    ViewOcrEngineListsComponent
  ],
  imports: [
    CommonModule,
    OcrEnginesRoutingModule,
    LayoutModule,
    FormsModule,ReactiveFormsModule,
    MatInputModule,MatFormFieldModule,
    MatSelectModule,MatIconModule,MatButtonModule,
    MatDialogModule,MatRadioModule,
    MatPaginatorModule, MatTableModule,
  ]
})
export class OcrEnginesModule { }
