import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-responsibles',
  templateUrl: './responsibles.component.html',
  styleUrls: ['./responsibles.component.css']
})
export class ResponsiblesComponent {
  persons: Person[] = [];
  teams = Object.values(teams);
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Person[]>('http://localhost:8080/persons').subscribe(
      data => {
        this.persons = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  deletePerson(id: number) {
    const url = `http://localhost:8080/persons/delete/${id}`;
    this.http.delete(url).subscribe(() => {
      this.persons = this.persons.filter(person => person.id !== id);
    });
  }
}
