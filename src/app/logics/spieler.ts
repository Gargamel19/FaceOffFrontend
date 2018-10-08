import { TeamNumber } from './team';

export class SpielerNumber {

  id: number;

  constructor(id: number) {
    this.id = id;
  }

}

export class Spieler {

  spielerNumber: SpielerNumber;
  name: string;
  kills: number;
  twitch: string;
  teams: TeamNumber[];

  constructor(name: string, twitch: string) {
    this.name = name;
    this.twitch = twitch;
    this.kills = 0;
  }
}
