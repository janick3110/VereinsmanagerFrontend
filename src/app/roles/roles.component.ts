import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Roles{
  id:number;
  name:string;
}

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {
  roles: Roles[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Roles[]>('http://localhost:8080/roles').subscribe(
      data => {
        this.roles = data;
      },
      error => {
        console.error(error);
      }
    );
  }
}
