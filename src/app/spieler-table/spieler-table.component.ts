import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpielerService } from '../logics/spieler.service';
import { Spieler } from '../logics/spieler';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spieler-table',
  templateUrl: './spieler-table.component.html',
  styleUrls: ['./spieler-table.component.css'],
  providers: [SpielerService]
})
export class SpielerTableComponent implements OnInit {

  title = 'FaceOff';
  spieler: Observable<Spieler[]>;

  constructor(private spielerService: SpielerService, private router: Router) {
  }

  ngOnInit() {
    this.spieler = this.spielerService.findAll();
    this.spieler.subscribe(res => console.log(res));
  }
}
