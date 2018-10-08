import { Injectable } from '@angular/core';
import { Spieler } from './spieler';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpielerService {

  private apiUrl = 'http://localhost:8080/spieler';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Spieler[]>  {
    return this.http.get<Spieler[]>(this.apiUrl);
  }

  findBySpielerNummer(id: number): Observable<Spieler> {
    return this.http.get<Spieler>(this.apiUrl + '/' + id);
  }
}
