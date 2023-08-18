import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { AddEditCustomersDialogComponent } from './add-edit-customers-dialog/add-edit-customers-dialog.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import { CustomerOnBoardingComponent } from './customer-on-boarding/customer-on-boarding.component';
import { AsignUnasignItemsComponent } from './asign-unasign-items/asign-unasign-items.component';


@NgModule({
  declarations: [
    CustomersComponent,
    ViewCustomersComponent,
    AddEditCustomersDialogComponent,
    CustomerOnBoardingComponent,
    AsignUnasignItemsComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    LayoutModule,
    FormsModule,ReactiveFormsModule,
    MatInputModule,MatFormFieldModule,
    MatSelectModule,MatIconModule,MatButtonModule,
    MatDialogModule,MatRadioModule,MatStepperModule,
    MatPaginatorModule, MatTableModule,MatCardModule,
    LayoutModule,
  ]
})
export class CustomersModule { }
