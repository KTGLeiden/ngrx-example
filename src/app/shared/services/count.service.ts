import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/** Service to get the count result from the server */
export class CountService {
  constructor(private readonly http: HttpClient) {}

  /** Get the count of cars from the server */
  public get(): Observable<number> {
    return this.http.get<number>('http://localhost:1234/cars/count');
  }
}
