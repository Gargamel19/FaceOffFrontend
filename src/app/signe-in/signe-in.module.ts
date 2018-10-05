import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SigneInComponent } from './signe-in.component';

@NgModule({
  declarations: [
    SigneInComponent
  ],
  imports: [ BrowserModule,
  ],
  providers: [],
  bootstrap: [SigneInComponent]
})
export class SigneInModule { }
