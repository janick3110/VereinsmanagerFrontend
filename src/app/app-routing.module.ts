import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { PlayerComponent } from './player/player.component';
//import { JerseyComponent } from './jersey/jersey.component';
//import { TrainingComponent } from './training/training.component';
import {HomeComponent} from "./home/home.component";
import { JerseyComponent } from './jersey/jersey.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'players', component: PlayerComponent },
  { path: 'jerseys', component: JerseyComponent },
//  { path: 'training', component: TrainingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
