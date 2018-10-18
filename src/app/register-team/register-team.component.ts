import { Component, OnInit } from '@angular/core';
import { TeamService } from '../logics/team.service';

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.css']
})
export class RegisterTeamComponent implements OnInit {

  title = 'FaceOff';

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  summit(name: string, spieler1: string, spieler2: string) {
    this.teamService.saveTeam(name, spieler1, spieler2);
    console.log(name + ' ' + spieler1 + ' ' + spieler2);
  }
}
