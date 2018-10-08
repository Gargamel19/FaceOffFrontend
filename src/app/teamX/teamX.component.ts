import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../logics/team.service';
import { Team } from '../logics/team';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team-x',
  templateUrl: './teamX.component.html',
  styleUrls: ['./teamX.component.css'],
})
export class TeamXComponent implements OnInit {

  title = 'FaceOff';
  id: number;
  teams: Observable<Team>;
  team: Team[];
  teamSolo: Team;

constructor(private route: ActivatedRoute, private teamService: TeamService) {
    this.route.params.subscribe( params => this.id = params.id );
}
  ngOnInit() {
   this.teams = this.teamService.findByTeamNummer(this.id);
  }
}
