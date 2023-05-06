import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersAbstractComponent } from './users-abstract/users-abstract.component';


@NgModule({
  declarations: [
    ListComponent,
    UserFormComponent,
    UsersAbstractComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PrimeNgModule,
    
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
