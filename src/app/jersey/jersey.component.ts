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
  image:Blob;
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
  selector: 'app-jersey',
  templateUrl: './jersey.component.html',
  styleUrls: ['./jersey.component.css']
})
export class JerseyComponent {
  jerseys: Jersey[] = [];
  teams = Object.values(teams);

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

  deleteJersey(id: number) {
    const url = `http://localhost:8080/jersey/delete/${id}`;
    this.http.delete(url).subscribe(() => {
      this.jerseys = this.jerseys.filter(jersey => jersey.id !== id);
    });
    location.reload();
  }

  openEditModal(jersey: Jersey) {
    const modal = document.getElementById("edit-modal");
    const form = document.getElementById("edit-form") as HTMLFormElement;
    const teamInput = document.getElementById("edit-team") as HTMLInputElement;
    const sponsorNameInput = document.getElementById("edit-sponsorName") as HTMLInputElement;
    const numbersInput = document.getElementById("edit-numbers") as HTMLInputElement;
    const amountPantsInput = document.getElementById("edit-amountPants") as HTMLInputElement;
    const amountSocksInput = document.getElementById("edit-amountSocks") as HTMLInputElement;
    const yearInput = document.getElementById("edit-year") as HTMLInputElement;

    const editModalWrapper = document.getElementById("edit-modal-wrapper") as HTMLElement;
    editModalWrapper.removeAttribute("hidden");

    if (modal && form && teamInput && sponsorNameInput && numbersInput && amountPantsInput && amountSocksInput && yearInput) {
      teamInput.value = jersey.team;
      sponsorNameInput.value = jersey.sponsor;
      numbersInput.value = jersey.numbers.join(",");
      amountPantsInput.value = jersey.amountPants.toString();
      amountSocksInput.value = jersey.amountSocks.toString();
      yearInput.value = jersey.year.toString();

      modal.style.display = "block";

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        const url = `http://localhost:3000/jerseys/${jersey.id}`;
        const formData = new FormData(form);

        fetch(url, {
          method: "UPDATE",
          body: formData
        })
          .then(response => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then(data => {
            console.log(data);
            // close modal or update the table
          })
          .catch(error => {
            console.error("Error:", error);
          });
        editModalWrapper.setAttribute("hidden", "true");
      });

    }
  }

  postData(){
    const image = document.getElementById("image") as HTMLInputElement;
    const team = document.getElementById("team") as HTMLInputElement;
    const sponsorName = document.getElementById("sponsorName") as HTMLInputElement;
    const numbers = document.getElementById("numbers") as HTMLInputElement;
    const amountPants = document.getElementById("amountPants") as HTMLInputElement;
    const amountSocks = document.getElementById("amountSocks") as HTMLInputElement;
    const year = document.getElementById("year") as HTMLInputElement;

// Create a new FormData object
    const formData = new FormData();

    if (team && sponsorName && numbers && amountPants && amountSocks && year){
      formData.append("team",team.value);
      formData.append("sponsorName",sponsorName.value);
      formData.append("numbers",numbers.value);
      formData.append("amountPants",amountPants.value);
      formData.append("amountSocks",amountSocks.value);
      formData.append("year",year.value);
    }

    if (image.files && image.files.length > 0) {
      // Append the image data to the form data object
      formData.append('image', image.files[0]);
    }


// Send the form data to the server using a HTTP-Post request
    fetch('http://localhost:8080/jersey/add', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        // Handle the response from the server
      })
      .catch(error => {
        // Handle errors
      });
  }
  

}
