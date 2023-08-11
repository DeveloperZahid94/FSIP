import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UsersRoutingModule } from '../users/users-routing.module';
import { RolesRoutingModule } from '../roles/roles-routing.module';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomersRoutingModule } from '../customers/customers-routing.module';




@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,MatIconModule,MatButtonModule,
    MatSidenavModule,MatListModule,MatExpansionModule,MatMenuModule,
    MatSelectModule,MatFormFieldModule,
    UsersRoutingModule,RolesRoutingModule,CustomersRoutingModule
 
  ],
  exports: [
    HeaderComponent,
    SideNavComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
