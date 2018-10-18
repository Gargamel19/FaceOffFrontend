import { Injectable } from '@angular/core';
import { Spieler } from './spieler';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpielerService {

  private apiUrl = 'http://localhost:8080/spieler';
  temp = 'http://localhost:8080/register/spieler';
  tempSpieler: Spieler;

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Spieler[]>  {
    return this.http.get<Spieler[]>(this.apiUrl);
  }

  findBySpielerNummer(id: number): Observable<Spieler> {
    return this.http.get<Spieler>(this.apiUrl + '/' + id);
  }
  findByName(name: string): Observable<Spieler> {
    return this.http.get<Spieler>(this.apiUrl + '/@/' + name);
  }
  saveSpieler(name: string, twitch: string) {
    this.tempSpieler = new Spieler(name, twitch);
    this.http.post<Spieler>(this.temp, this.tempSpieler).subscribe(res => {
      console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
