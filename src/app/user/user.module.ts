import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewUserComponent } from './view-user/view-user.component';



@NgModule({
  declarations: [
    CreateUserComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    CreateUserComponent,
    ViewUserComponent
  ]
})
export class UserModule { }
