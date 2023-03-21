import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { AddTeamComponent } from './add-team/add-team.component';
import { ListTeamComponent } from './list-team/list-team.component';


@NgModule({
  declarations: [
    AddTeamComponent,
    ListTeamComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
