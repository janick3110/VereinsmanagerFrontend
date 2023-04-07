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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  players: Player[] = [];

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
