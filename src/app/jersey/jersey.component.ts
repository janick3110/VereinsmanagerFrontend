import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Jersey {
  id: number;
  sponsor: string;
  numbers: number[];
  amountPants: number;
  amountSocks: number;
  team: string;
  year: number;
}

@Component({
  selector: 'app-jersey',
  templateUrl: './jersey.component.html',
  styleUrls: ['./jersey.component.css']
})
export class JerseyComponent {
  jerseys: Jersey[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Jersey[]>('http://localhost:8080/jersey').subscribe(
      data => {
        this.jerseys = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  compareNumbers(a: number, b: number) {
    return a - b;
  }

}
