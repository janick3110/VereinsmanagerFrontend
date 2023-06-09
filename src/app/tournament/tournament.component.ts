import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { SortPointsAndDifferencePipe } from './sort-points-and-difference.pipe';

export interface Game {
  id: number;
  tournamentID: number;
  round: number;
  groupID: number;
  homeTeamID: number;
  guestTeamID: number;
  homeGoals: number;
  guestGoals: number;
  fieldID: number;
  pointsHome: number;
  pointsGuest: number;
  start: string;
  played: boolean;
}

interface Team{
  id: number;
  name: string;
}

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent {
  games: Game[] = [];
  teams: Team[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Game[]>('http://localhost:8080/tournament/tournaments/result/21/').subscribe(
      data => {
        this.games = data;
      },
      error => {
        console.error(error);
      }
    );
    this.http.get<Team[]>('http://localhost:8080/tournament/teams').subscribe(
      data => {
        this.teams = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  getTeamName(teamID: number): string {
    const team = this.teams.find((team) => team.id === teamID);
    return team ? team.name : '';
  }
}
