import { SpielerNumber } from './spieler';

export class TeamNumber {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

}

export class TeamSkelett {

  name: string;
  spieler1: string;
  spieler2: string;

  constructor(name: string, member1: string, member2: string) {
    this.name = name;
    this.spieler1 = member1;
    this.spieler2 = member2;
  }
}

export class Team {

  teamNumber: TeamNumber;
  name: string;
  member: string[];

  constructor(name: string, member1: string, member2: string) {
    this.member = [];
    this.name = name;
    this.member[0] = member1;
    this.member[1] = member2;
  }
}
