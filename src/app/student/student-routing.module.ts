import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListStudentsComponent} from "./list-students/list-students.component";
import {AddStudentComponent} from "./add-student/add-student.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {path:'list',component:ListStudentsComponent},
  {path:'add',component:AddStudentComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
