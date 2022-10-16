import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Vehicle, VehicleResponse } from '../interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  public getVehicles(page: number): Observable<VehicleResponse> {
    return this.http.get<VehicleResponse>(`${environment.apiBaseUrl}vehicles/?page=${page}`);
  }

  public getCharacterVehicles(lista: string[]): Observable<Vehicle>[] {
    let vehiclesList: Observable<Vehicle>[] = [];
    if(lista.length != 0) {
      lista.forEach(vehiculo => {
        vehiclesList.push(this.http.get<Vehicle>(vehiculo));
      })
    }
    return vehiclesList;
  }
}
