import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpielerService } from '../logics/spieler.service';
import { Spieler } from '../logics/spieler';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-spieler-x-name',
  templateUrl: './spielerXName.component.html',
  styleUrls: ['./spielerXName.component.css'],
})
export class SpielerXNameComponent implements OnInit {

  title = 'FaceOff';
  spielerName: string;
  spielerOb: Observable<Spieler>;
  spieler: Spieler;

constructor(private route: ActivatedRoute, private spielerService: SpielerService, public sanitizer: DomSanitizer, private router: Router) {
    this.route.params.subscribe( params => this.spielerName = params.name );
}
  ngOnInit() {
   this.spielerOb = this.spielerService.findByName(this.spielerName);
   this.spielerOb.subscribe(temp => this.spieler = temp);
  }


  returnTwitch() {
    console.log('https://player.twitch.tv/?channel=' + this.spieler.twitch);
    return 'https://player.twitch.tv/?channel=' + this.spieler.twitch;
  }

}
