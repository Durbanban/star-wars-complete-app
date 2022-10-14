import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlanetComponent } from './components/planet/planet.component';
import { SpeciesComponent } from './components/species/species.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { FilmsComponent } from './components/films/films.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

const routes: Routes = [
  {path: 'characters', component: CharacterComponent},
  {path: 'landing',component: LandingPageComponent},
  {path: '',redirectTo:'/landing', pathMatch: 'full'},
  {path: 'planets', component: PlanetComponent},
  {path: 'species', component: SpeciesComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
