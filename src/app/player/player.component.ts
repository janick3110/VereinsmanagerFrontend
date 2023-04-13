import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Player {
  id: number;
  firstname: string;
  lastname: string;
  date: string;
  housenumber: number;
  street: string;
  city: string;
  postalCode: number;
  mailAdress: string;
  telephoneNumber: string;
  team: string;
}

export enum teams {
  U7 = "U7",
  U9 = "U9",
  U11 = "U11",
  U13 = "U13",
  U15 = "U15",
  U17 = "U17",
  U19 = "U19",
  ARCHIVE = "ARCHIVE",
  OTHER = "OTHER"
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  players: Player[] = [];
  teams = Object.values(teams);
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Player[]>('http://localhost:8080/player').subscribe(
      data => {
        this.players = data;
      },
      error => {
        console.error(error);
      }
    );
  }
}








