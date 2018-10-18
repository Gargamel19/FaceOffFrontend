import { Component, OnInit } from '@angular/core';
import { SpielerService } from '../logics/spieler.service';

@Component({
  selector: 'app-register-spieler',
  templateUrl: './register-spieler.component.html',
  styleUrls: ['./register-spieler.component.css']
})
export class RegisterSpielerComponent implements OnInit {

  title = 'FaceOff';
  constructor(private spielerService: SpielerService) { }

  ngOnInit() {
  }

  summit(name: string, twitch: string) {
    this.spielerService.saveSpieler(name, twitch);
    console.log(name + ' ' + twitch);
  }
}
