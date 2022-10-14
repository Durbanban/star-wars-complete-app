import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { StarShipResponse } from '../interfaces/starship.interface';

@Injectable({
  providedIn: 'root'
})
export class StarShipService {

  constructor(private http: HttpClient) { }

  public getStarShip(page: number): Observable<StarShipResponse> {
    return this.http.get<StarShipResponse>(`${environment.apiBaseUrl}starships?page=${page}`)
  }

}
