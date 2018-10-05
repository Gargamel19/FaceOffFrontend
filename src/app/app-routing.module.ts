import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TeamTableComponent } from './team-table/team-table.component';
import { SpielerTableComponent } from './spieler-table/spieler-table.component';
import { SigneInComponent } from './signe-in/signe-in.component';
import { SpielerXComponent } from './spielerX/spielerX.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'teams', component: TeamTableComponent},
  { path: 'spieler', component: SpielerTableComponent},
  { path: 'spieler/:id', component: SpielerXComponent},
  { path: 'teams/register', component: SigneInComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
