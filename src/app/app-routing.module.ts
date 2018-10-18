import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TeamTableComponent } from './team-table/team-table.component';
import { SpielerTableComponent } from './spieler-table/spieler-table.component';
import { RegisterSpielerComponent } from './register-spieler/register-spieler.component';
import { SpielerXNameComponent } from './spielerXName/spielerXName.component';
import { TeamXComponent } from './teamX/teamX.component';
import { RegisterTeamComponent } from './register-team/register-team.component';
import { ErgebnisseComponent } from './ergebnisse/ergebnisse.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'teams', component: TeamTableComponent},
  { path: 'spieler', component: SpielerTableComponent},

  { path: 'spieler/:name', component: SpielerXNameComponent},
  { path: 'team/:name', component: TeamXComponent},

  { path: 'register/spieler', component: RegisterSpielerComponent},
  { path: 'register/team', component: RegisterTeamComponent},

  { path: 'ergebnisse', component: ErgebnisseComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
