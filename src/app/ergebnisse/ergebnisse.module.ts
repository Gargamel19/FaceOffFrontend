import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ErgebnisseComponent } from './ergebnisse.component';

@NgModule({
  declarations: [
    ErgebnisseComponent
  ],
  imports: [ BrowserModule,
  ],
  providers: [],
  bootstrap: [ErgebnisseComponent]
})
export class SigneInModule { }
