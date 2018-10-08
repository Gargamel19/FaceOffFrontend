import { Component, OnInit } from '@angular/core';
import { TeamService } from '../logics/team.service';
import { Team } from '../logics/team';
import { Observable } from 'rxjs';
import { SpielerService } from '../logics/spieler.service';
import { Spieler } from '../logics/spieler';

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
  spieler1ROH: Spieler = new Spieler('', '');
  spieler2ROH: Spieler = new Spieler('1', '1');
  temp: Team;
  i = 0;

  constructor(private teamService: TeamService, private spielerService: SpielerService) {
  }

  ngOnInit() {
    this.teams = this.teamService.findAll();
    this.teams.subscribe(res => {
      res.forEach(temp1 => {
        this.sucheSpieler1(temp1.member[0].id);
        this.sucheSpieler2(temp1.member[1].id);
        this.i = this.i + 1;
        });
      });
  }

  sucheSpieler1(spielerNumber: number) {
    console.log(spielerNumber);
    this.spieler1 = this.spielerService.findBySpielerNummer(spielerNumber);
    this.spieler1.subscribe(temp => console.log(temp.name));
  }

  sucheSpieler2(spielerNumber: number) {
    console.log(spielerNumber);
    this.spieler2 = this.spielerService.findBySpielerNummer(spielerNumber);
    this.spieler2.subscribe(temp2 => console.log(temp2.name));
  }
}
