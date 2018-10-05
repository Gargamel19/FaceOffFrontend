import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpielerTableComponent } from './spieler-table.component';

@NgModule({
  declarations: [
    SpielerTableComponent
  ],
  imports: [ BrowserModule,
  ],
  providers: [],
  bootstrap: [SpielerTableComponent]
})
export class SpielerTableModule { }
