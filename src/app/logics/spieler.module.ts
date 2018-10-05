import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpielerTableComponent } from '../spieler-table/spieler-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [SpielerTableComponent]
})
export class SpielerModule { }
