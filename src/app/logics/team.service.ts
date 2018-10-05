import { Injectable } from '@angular/core';
import { Team } from './Team';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private apiUrl = 'http://localhost:8080/teams';
  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Team[]>  {
    return this.http.get<Team[]>(this.apiUrl);
  }
}
