import {Team} from './team';
import {Location} from './location';
import {Result} from './result';
import {Group} from './group';
import {Goal} from './goal';

export type Match = {
  goals: Goal[];
  group: Group;
  lastUpdateDateTime: string;
  leagueId: number;
  leagueName: string;
  leagueSeason: number;
  leagueShortcut: string;// todo: change to enum
  location: Location;
  matchDateTime: string;
  matchDateTimeUTC: string;
  matchID: number;
  matchIsFinished: boolean;
  matchResults: Result[];
  numberOfViewers: number;
  team1: Team;
  team2: Team;
  timeZoneID: string;
}
