import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListStudentsComponent} from "../student/list-students/list-students.component";
import {AddStudentComponent} from "../student/add-student/add-student.component";
import {ListTeamComponent} from "./list-team/list-team.component";
import {AddTeamComponent} from "./add-team/add-team.component";

const routes: Routes = [
  {path:'list',component:ListTeamComponent},
  {path:'add',component:AddTeamComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
