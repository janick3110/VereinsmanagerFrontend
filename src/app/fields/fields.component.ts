import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Field{
  id: number;
  name: string;
}

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent {
  fields: Field[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get<Field[]>('http://localhost:8080/fields').subscribe(
      data => {
        this.fields = data;
      },
      error => {
        console.error(error);
      }
    );
  }

}
