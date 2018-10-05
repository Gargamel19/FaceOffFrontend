import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpielerXComponent } from './spielerX.component';

@NgModule({
  declarations: [
    SpielerXComponent
  ],
  imports: [ BrowserModule,
  ],
  providers: [],
  bootstrap: [SpielerXComponent]
})
export class SpielerXModule { }
