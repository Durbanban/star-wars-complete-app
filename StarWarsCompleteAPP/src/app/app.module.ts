import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './modules/material-imports.module';
import { CharacterComponent } from './components/character/character.component';
import { PlanetComponent } from './components/planet/planet.component';
import { SpeciesComponent } from './components/species/species.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FilmsComponent } from './components/films/films.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    CharacterComponent,
    PlanetComponent,
    SpeciesComponent,
    NotFoundComponent,
    FilmsComponent,
    VehiclesComponent,
    StarshipsComponent,
    CharacterDetailsComponent,
    PlanetDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
