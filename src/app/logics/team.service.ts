import { Injectable } from '@angular/core';
import { Team } from './Team';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private apiUrl = 'http://localhost:8080/teams';
  private apiSoloTeamUrl = 'http://localhost:8080/team';
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

}
