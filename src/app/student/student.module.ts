import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AddStudentComponent,
    ListStudentsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,

    HttpClientModule,

    FormsModule,

  ],
  providers:[]
})
export class StudentModule { }
