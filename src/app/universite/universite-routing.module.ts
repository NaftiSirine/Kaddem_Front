import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListStudentsComponent} from "../student/list-students/list-students.component";
import {AddStudentComponent} from "../student/add-student/add-student.component";
import {ListUnivComponent} from "./list-univ/list-univ.component";
import {AddUnivComponent} from "./add-univ/add-univ.component";

const routes: Routes = [
  {path:'list',component:ListUnivComponent},
  {path:'add',component:AddUnivComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
