import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { PlayerComponent } from './player/player.component';
//import { JerseyComponent } from './jersey/jersey.component';
//import { TrainingComponent } from './training/training.component';
import {HomeComponent} from "./home/home.component";
import { JerseyComponent } from './jersey/jersey.component';
import { PlayerComponent } from './player/player.component';
import { ResponsiblesComponent } from './responsibles/responsibles.component';
import { BookingsComponent} from './bookings/bookings.component';
import { FieldsComponent} from './fields/fields.component';
import { SportsActivitiesComponent } from  './sports-activities/sports-activities.component'
import { RolesComponent } from  './roles/roles.component'
import { TournamentComponent} from "./tournament/tournament.component";
//import {ImpressumComponent } from  './impressum/impressum.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'players', component: PlayerComponent },
  { path: 'jerseys', component: JerseyComponent },
  { path: 'persons', component: ResponsiblesComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'fields', component: FieldsComponent },
  { path: 'activities', component: SportsActivitiesComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'tournament', component: TournamentComponent },
//  { path: 'impressum', component: ImpressumComponent },
//  { path: 'training', component: TrainingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
