import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Planet, PlanetResponse } from '../interfaces/planet.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  public getPlanets(page: number): Observable<PlanetResponse> {
    return this.http.get<PlanetResponse>(`${environment.apiBaseUrl}planets?page=${page}`)
  }

  public getCharacterPlanet(url: string): Observable<Planet> {
    return this.http.get<Planet>(url);
  }
}
