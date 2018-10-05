import { SpielerNumber } from './spieler';

export class TeamNumber {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

}

export class Team {

  teamNumber: TeamNumber;
  name: string;
  member: SpielerNumber[];

  constructor(name: string, member1: SpielerNumber, member2: SpielerNumber) {
    this.name = name;
    this.member[0] = member1;
    this.member[1] = member2;
  }
}
