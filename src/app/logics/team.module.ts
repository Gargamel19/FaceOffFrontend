import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamTableComponent } from '../team-table/team-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TeamTableComponent]
})
export class TeamModule { }
