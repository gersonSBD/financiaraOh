import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUsersService } from './services/shared-users.service';
import { SpinnerService } from './services/spinner.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SharedUsersService,
    SpinnerService
  ]
})
export class CoreModule { }
