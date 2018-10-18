import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';

import { TeamTableComponent } from './team-table/team-table.component';
import { SpielerTableComponent } from './spieler-table/spieler-table.component';

import { SpielerXNameComponent } from './spielerXName/spielerXName.component';
import { TeamXComponent } from './teamX/teamX.component';

import { RegisterSpielerComponent } from './register-spieler/register-spieler.component';
import { RegisterTeamComponent } from './register-team/register-team.component';

import { ErgebnisseComponent } from './ergebnisse/ergebnisse.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterSpielerComponent,
    RegisterTeamComponent,
    TeamTableComponent,
    SpielerTableComponent,
    TeamXComponent,
    SpielerXNameComponent,
    ErgebnisseComponent
  ],
  imports: [ BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
