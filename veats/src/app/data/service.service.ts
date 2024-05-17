import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platos } from '../common/platos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getPlatos(): Observable<any>{
    return this.http.get('./assets/data/data.json')
  }
}
