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

interface Jersey {
  id: number;
  sponsor: string;
  numbers: number[];
  team: string;
}

interface Field {
  id: number;
  sponsor: string;
  numbers: number[];
  team: string;
}

interface Person {
  id: number;
  firstname: string;
  lastname: string;
  housenumber: number;
  street: string;
  city: string;
  postalCode: number;
  mailAdress: string;
  telephoneNumber: string;
}

interface Booking{

}

interface Field{

}

interface Roles{

}
interface Activities{

}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  players: Player[] = [];
  jerseys: Jersey[] = [];
  persons: Person[] = [];
  bookings: Booking[] = [];
  fields: Field[] = [];
  roles: Roles[] = [];
  activities: Activities[] = [];

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
    this.http.get<Jersey[]>('http://localhost:8080/jersey').subscribe(
      data => {
        this.jerseys = data;
      },
      error => {
        console.error(error);
      }
    );
    this.http.get<Person[]>('http://localhost:8080/persons').subscribe(
      data => {
        this.persons = data;
      },
      error => {
        console.error(error);
      }
    );
    this.http.get<Booking[]>('http://localhost:8080/bookings').subscribe(
      data => {
        this.bookings = data;
      },
      error => {
        console.error(error);
      }
    );
    this.http.get<Field[]>('http://localhost:8080/fields').subscribe(
      data => {
        this.fields = data;
      },
      error => {
        console.error(error);
      }
    );
    this.http.get<Roles[]>('http://localhost:8080/roles').subscribe(
      data => {
        this.roles = data;
      },
      error => {
        console.error(error);
      }
    );

    this.http.get<Activities[]>('http://localhost:8080/activities').subscribe(
      data => {
        this.activities = data;
      },
      error => {
        console.error(error);
      }
    );
  }


}
