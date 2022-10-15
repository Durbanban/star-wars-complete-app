import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { VehicleResponse } from '../interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  public getVehicles(page: number): Observable<VehicleResponse> {
    return this.http.get<VehicleResponse>(`${environment.apiBaseUrl}vehicles/?page=${page}`);
  }
}
