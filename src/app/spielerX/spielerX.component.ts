import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpielerService } from '../logics/spieler.service';
import { Spieler } from '../logics/spieler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spieler-x',
  templateUrl: './spielerX.component.html',
  styleUrls: ['./spielerX.component.css'],
})
export class SpielerXComponent implements OnInit {

  title = 'FaceOff';
  id: number;
  spieler: Observable<Spieler[]>;
  spieler1: Spieler;

constructor(private route: ActivatedRoute, private spielerService: SpielerService) {
    this.route.params.subscribe( params => this.id = params.id );
}
  ngOnInit() {
   this.spieler = this.spielerService.findBySpielerNummer(this.id);
   this.spieler.forEach(temp => console.log(temp))
  }
}
