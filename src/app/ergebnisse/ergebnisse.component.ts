import { Component, OnInit } from '@angular/core';
import { SpielerService } from '../logics/spieler.service';

@Component({
  selector: 'app-ergebnisse',
  templateUrl: './ergebnisse.component.html',
  styleUrls: ['./ergebnisse.component.css']
})
export class ErgebnisseComponent implements OnInit {

  title = 'FaceOff';
  constructor(private spielerService: SpielerService) { }

  ngOnInit() {
  }

  summit(name: string, twitch: string) {
    this.spielerService.saveSpieler(name, twitch);
    console.log(name + ' ' + twitch);
  }
}
