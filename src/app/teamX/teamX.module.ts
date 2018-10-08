import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TeamXComponent } from './teamX.component';

@NgModule({
  declarations: [
    TeamXComponent
  ],
  imports: [ BrowserModule,
  ],
  providers: [],
  bootstrap: [TeamXComponent]
})
export class TeamXModule { }
