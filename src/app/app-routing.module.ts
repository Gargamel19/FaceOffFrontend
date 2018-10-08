import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TeamTableComponent } from './team-table/team-table.component';
import { SpielerTableComponent } from './spieler-table/spieler-table.component';
import { SigneInComponent } from './signe-in/signe-in.component';
import { SpielerXNameComponent } from './spielerXName/spielerXName.component';
import { TeamXComponent } from './teamX/teamX.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'teams', component: TeamTableComponent},
  { path: 'spieler', component: SpielerTableComponent},
  { path: 'spieler/:name', component: SpielerXNameComponent},
  { path: 'team/:name', component: TeamXComponent},
  { path: 'teams/register', component: SigneInComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
