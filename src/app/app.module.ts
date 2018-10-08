import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SigneInComponent } from './signe-in/signe-in.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TeamTableComponent } from './team-table/team-table.component';
import { SpielerTableComponent } from './spieler-table/spieler-table.component';
import { SpielerXComponent } from './spielerX/spielerX.component';
import { TeamXComponent } from './teamX/teamX.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigneInComponent,
    TeamTableComponent,
    SpielerTableComponent,
    SpielerXComponent,
    TeamXComponent
  ],
  imports: [ BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
