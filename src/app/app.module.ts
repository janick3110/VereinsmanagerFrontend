import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Add this line

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { JerseyComponent } from './jersey/jersey.component';
import { PlayerComponent } from './player/player.component';
import { FieldsComponent } from './fields/fields.component';
import { ResponsiblesComponent } from './responsibles/responsibles.component';
import { BookingsComponent } from './bookings/bookings.component';
import { SportsActivitiesComponent } from './sports-activities/sports-activities.component';
import { TournamentComponent } from './tournament/tournament.component';
import {SortPointsAndDifferencePipe} from "./tournament/sort-points-and-difference.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JerseyComponent,
    PlayerComponent,
    FieldsComponent,
    ResponsiblesComponent,
    BookingsComponent,
    SportsActivitiesComponent,
    TournamentComponent,
    SortPointsAndDifferencePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCheckboxModule // Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
