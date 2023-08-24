import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueuesRoutingModule } from './queues-routing.module';
import { QueuesComponent } from './queues.component';
import { ViewQueuesListComponent } from './view-queues-list/view-queues-list.component';
import { AddEditQueuesComponent } from './add-edit-queues/add-edit-queues.component';

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
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    QueuesComponent,
    ViewQueuesListComponent,
    AddEditQueuesComponent
  ],
  imports: [
    CommonModule,
    QueuesRoutingModule,
    LayoutModule,
    FormsModule,ReactiveFormsModule,
    MatInputModule,MatFormFieldModule,
    MatSelectModule,MatIconModule,MatButtonModule,
    MatDialogModule,MatRadioModule,MatCheckboxModule,
    MatPaginatorModule, MatTableModule,
  ]
})
export class QueuesModule { }
