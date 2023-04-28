import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Booking {
  id: number;
  description: string;
  idOfGroup: number;
  idOfField: number;
  amountSegmentsOfField: number;
  startTime: Date;
  endTime: Date;
}

interface Field {
  id: number;
  name: string;
  segments: number;
}

interface Activity {
  id: number;
  name: string;
}

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  bookings: Booking[] = [];
  fields: Field[] = [];
  activities: Activity[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get<Booking[]>('http://localhost:8080/bookings').subscribe(
      data => {
        this.bookings = data;
      },
      error => {
        console.error(error);
      }
    );

    let slider = document.getElementById("amountSegmentsOfField") as HTMLInputElement;
    let sliderValue = document.getElementById("slider-value") as HTMLElement;

    slider.addEventListener("input", function() {
      sliderValue.textContent = slider.value;
    });

    const select = document.getElementById("idOfField");

    fetch("http://localhost:8080/fields")
      .then(response => response.json())
      .then(fields => {
        fields.forEach((field: Field) => {
          const option = document.createElement("option");
          option.value = field.id.toString();
          option.textContent = "(" + field.id + ") " + field.name;
          // @ts-ignore
          select.appendChild(option);
        });
      })
      .catch(error => console.error(error));

    const group = document.getElementById("idOfActivity");

    fetch("http://localhost:8080/activities")
      .then(response => response.json())
      .then(activities => {
        activities.forEach((activitiy: Activity) => {
          const option = document.createElement("option");
          option.value = activitiy.id.toString();
          option.textContent = "(" + activitiy.id + ") " + activitiy.name;
          // @ts-ignore
          group.appendChild(option);
        });
      })
      .catch(error => console.error(error));
  }

  deleteBooking(id: number) {
    const url = `http://localhost:8080/booking/delete/${id}`;
    this.http.delete(url).subscribe(() => {
      this.bookings = this.bookings.filter(booking => booking.id !== id);
    });
    location.reload();
  }

  UpdateSlider(){
    let slider = document.getElementById("amountSegmentsOfField") as HTMLInputElement;
    let sliderValue = document.getElementById("slider-value") as HTMLElement;

    slider.addEventListener("input", function() {
      sliderValue.textContent = slider.value;
    });

  }

}
