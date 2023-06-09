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

interface Rank{
  rank: number;
  teamID: number;
  games: number;
  points: number;
  goalsShot: number;
  goalsConceded: number;
  difference: number;
}

interface Table{
  table: Rank[];
}

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent {
  games: Game[] = [];
  teams: Team[] = [];
  ranks: Rank[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Game[]>('http://localhost:8080/tournament/tournaments/result/21/').subscribe(
      data => {
        this.games = data;
        let integerList: number[] = []; // Your list of integers

        for (const game of this.games) {
          if (!integerList.includes(game.homeTeamID)) {
            integerList.push(game.homeTeamID);
          }

          if (!integerList.includes(game.guestTeamID)) {
            integerList.push(game.guestTeamID);
          }
        }



        for (const team of integerList) {

          let goalsShot = 0;
          let goalsConceded = 0;
          let points = 0;
          let games = 0;

          for (const game of this.games) {
            if (game.played){
              if (game.homeTeamID === team) {
                goalsShot = goalsShot + game.homeGoals;
                goalsConceded = goalsConceded + game.guestGoals;
                points = points + game.pointsHome;
                games = games + 1;
              } else if (game.guestTeamID === team) {
                goalsShot = goalsShot + game.guestGoals;
                goalsConceded = goalsConceded + game.homeGoals;
                points = points + game.pointsGuest;
                games = games + 1;
              }
            }

          }


          let emptyRank: Rank = {
            rank: 0,
            teamID:0,
            games:0,
            points: 0,
            goalsShot: 0,
            goalsConceded: 0,
            difference: 0
          };

          emptyRank.goalsShot = goalsShot;
          emptyRank.goalsConceded = goalsConceded;
          emptyRank.points = points;
          emptyRank.teamID = team;
          emptyRank.games = games;

          this.ranks.push(emptyRank);
        }


        this.ranks.sort((a, b) => {
          // Compare by points
          if (b.points !== a.points) {
            return b.points - a.points;
          }

          // Compare by difference
          if (a.difference !== b.difference) {
            return b.difference - a.difference;
          }

          // Compare by goalsShot
          return b.goalsShot - a.goalsShot;
        });

        let index = 1;
        for (const rank of this.ranks) {
          rank.rank = index;
          index = index + 1;
        }
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
