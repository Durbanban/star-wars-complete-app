import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CharacterResponse } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  public getCharacters(page: number): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(`${environment.apiBaseUrl}people?page=${page}`)
  }

}
