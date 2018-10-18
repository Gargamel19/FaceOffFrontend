import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RegisterTeamComponent } from './register-team.component';

@NgModule({
  declarations: [
    RegisterTeamComponent
  ],
  imports: [ BrowserModule,
  ],
  providers: [],
  bootstrap: [RegisterTeamComponent]
})
export class SigneInModule { }
