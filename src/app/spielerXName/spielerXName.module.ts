import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpielerXNameComponent } from './spielerXName.component';

@NgModule({
  declarations: [
    SpielerXNameComponent
  ],
  imports: [ BrowserModule,
  ],
  providers: [],
  bootstrap: [SpielerXNameComponent]
})
export class SpielerXNameModule { }
