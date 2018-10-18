import { Injectable } from '@angular/core';
import { Team, TeamSkelett } from './Team';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private apiUrl = 'http://localhost:8080/teams';
  private apiSoloTeamUrl = 'http://localhost:8080/team';
  private temp = 'http://localhost:8080/register/team';

  private tempTeam: TeamSkelett;

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Team[]>  {
    return this.http.get<Team[]>(this.apiUrl);
  }
  findByTeamNummer(id: number): Observable<Team> {
    return this.http.get<Team>(this.apiSoloTeamUrl + '/' + id);
  }
  findByName(name: string): Observable<Team> {
    return this.http.get<Team>(this.apiSoloTeamUrl + '/@/' + name);
  }

  saveTeam(name: string, spieler1: string, spieler2: string) {
    this.tempTeam = new TeamSkelett(name, spieler1, spieler2);
    this.http.post<Team>(this.temp, this.tempTeam).subscribe(res => {
      console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
