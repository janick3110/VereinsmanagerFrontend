import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { JerseyComponent } from './jersey/jersey.component';
import { PlayerComponent } from './player/player.component';
import { FieldsComponent } from './fields/fields.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JerseyComponent,
    PlayerComponent,
    FieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
