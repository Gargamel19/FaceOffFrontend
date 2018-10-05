import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  title = 'FaceOff';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  newTeamResiter() {
    this.router.navigate(['../signe-in/signe-in.component.html']);
  }

}
