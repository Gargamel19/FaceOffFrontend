import { Component, OnInit } from '@angular/core';
import { TeamService } from '../logics/team.service';
import { Team } from '../logics/team';
import { Observable } from 'rxjs';
import { SpielerService } from '../logics/spieler.service';
import { Spieler } from '../logics/spieler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnInit {

  title = 'FaceOff';
  teams: Observable<Team[]>;
  spieler1: Observable<Spieler>;
  spieler2: Observable<Spieler>;
  temp: Team;
  i = 0;

  constructor(private teamService: TeamService, private spielerService: SpielerService, private router: Router) {
  }

  ngOnInit() {
    this.teams = this.teamService.findAll();
    this.teams.subscribe(res => {
      res.forEach(temp1 => {
        this.sucheSpieler1(temp1.member[0]);
        this.sucheSpieler2(temp1.member[1]);
        this.i = this.i + 1;
        });
      });
  }

  sucheSpieler1(name: string) {
    console.log(name);
    this.spieler1 = this.spielerService.findByName(name);
    this.spieler1.subscribe(temp => console.log(temp.name));
  }

  sucheSpieler2(name: string) {
    console.log(name);
    this.spieler2 = this.spielerService.findByName(name);
    this.spieler2.subscribe(temp2 => console.log(temp2.name));
  }

  toPlayer(playerNumber: number) {
    this.router.navigate(['spieler', playerNumber]);
  }

  toTeam(teamNumber) {
    this.router.navigate(['team', teamNumber]);
  }

}
