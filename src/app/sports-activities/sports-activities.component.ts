import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface SportsActivity{
  id: number;
  name: string;
  responsibleID: number;
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
  role: number;
}

@Component({
  selector: 'app-sports-activities',
  templateUrl: './sports-activities.component.html',
  styleUrls: ['./sports-activities.component.css']
})
export class SportsActivitiesComponent {
  sportsActivities: SportsActivity[] = [];
  responsibles: Person[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<SportsActivity[]>('http://localhost:8080/activities').subscribe(
      data => {
        this.sportsActivities = data;
      },
      error => {
        console.error(error);
      }
    );

    this.http.get<Person[]>('http://localhost:8080/persons').subscribe(
      data => {
        this.responsibles = data;
        console.log(data);
      },
      error => {
        console.error(error);
      }
    );

    const group = document.getElementById("responsibleID");

    fetch("http://localhost:8080/persons")
      .then(response => response.json())
      .then(activities => {
        activities.forEach((person: Person) => {
          const option = document.createElement("option");
          option.value = person.id.toString();
          option.textContent = "(" + person.id + ") " + person.firstname + " " + person.lastname;
          // @ts-ignore
          group.appendChild(option);
        });
      })
      .catch(error => console.error(error));
  }

  deletePerson(id: number) {
    const url = `http://localhost:8080/persons/delete/${id}`;
    this.http.delete(url).subscribe(() => {
      this.sportsActivities = this.sportsActivities.filter(sportActivity => sportActivity.id !== id);
    });
  }

  GetCorrectName(id: number){
    let counter : number = 0;


    for (const person of this.responsibles) {
      console.log(person.id);
      counter = counter + 1;
      if(person.id == id){
        return "(" + person.id + ") " + person.firstname + " " + person.lastname;
      }
    }
    return;
  }
}
