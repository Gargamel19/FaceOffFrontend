import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RegisterSpielerComponent } from './register-spieler.component';

@NgModule({
  declarations: [
    RegisterSpielerComponent
  ],
  imports: [ BrowserModule,
  ],
  providers: [],
  bootstrap: [RegisterSpielerComponent]
})
export class SigneInModule { }
