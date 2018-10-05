import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TeamTableComponent } from './team-table.component';

@NgModule({
  declarations: [
    TeamTableComponent
  ],
  imports: [ BrowserModule,
  ],
  providers: [],
  bootstrap: [TeamTableComponent]
})
export class TeamTableModule { }
