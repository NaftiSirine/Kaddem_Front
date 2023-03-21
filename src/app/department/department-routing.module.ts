import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListTeamComponent} from "../team/list-team/list-team.component";
import {AddTeamComponent} from "../team/add-team/add-team.component";
import {ListDepartmentComponent} from "./list-department/list-department.component";
import {AddDepartmentComponent} from "./add-department/add-department.component";

const routes: Routes = [
  {path:'list',component:ListDepartmentComponent},
  {path:'add',component:AddDepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
