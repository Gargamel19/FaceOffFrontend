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
  name: string;
  teams: Observable<Team>;
  team: Team;

constructor(private route: ActivatedRoute, private teamService: TeamService) {
    this.route.params.subscribe( params => this.name = params.name );
}
  ngOnInit() {
   this.teams = this.teamService.findByName(this.name);
   this.teams.subscribe(temp => this.team = temp);
  }
}
