import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RickyMorty } from '../common/ricky-morty';
import { Personaje } from '../common/personaje';

@Injectable({
  providedIn: 'root',
})
export class APIServiceService {
  private urlApi = 'https://rickandmortyapi.com/api/character/';
  private urlApiBase = ' ';
  constructor(private http: HttpClient) {}

  public GetPersonajes(): Observable<RickyMorty> {
    return this.http.get<RickyMorty>(this.urlApi);
  }
  public GetPersonaje(id: number): Observable<Personaje> {
    return this.http.get<Personaje>(this.urlApi + id);
  }
}