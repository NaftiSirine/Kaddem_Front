import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";

const routes: Routes = [

  {path:'',component:HomeComponent, children: [
      {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule)}
      ,
      {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)},
      {
        path: 'universite',
        loadChildren: () => import('./universite/universite.module').then(m => m.UniversiteModule)},
      {
        path: 'team',
        loadChildren: () => import('./team/team.module').then(m => m.TeamModule)}
    ]},
  {path:'authentication',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
