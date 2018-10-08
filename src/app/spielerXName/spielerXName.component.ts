import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpielerService } from '../logics/spieler.service';
import { Spieler } from '../logics/spieler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spieler-x-name',
  templateUrl: './spielerXName.component.html',
  styleUrls: ['./spielerXName.component.css'],
})
export class SpielerXNameComponent implements OnInit {

  title = 'FaceOff';
  name: string;
  spielerOb: Observable<Spieler>;
  spieler: Spieler;
  twitchURL: string;

constructor(private route: ActivatedRoute, private spielerService: SpielerService) {
    this.route.params.subscribe( params => this.name = params.name );
}
  ngOnInit() {
   this.spielerOb = this.spielerService.findByName(this.name);
   this.spielerOb.subscribe(temp => this.spieler = temp);
   this.twitchURL = 'https://player.twitch.tv/?channel=' + this.spieler.name;
  }
}
