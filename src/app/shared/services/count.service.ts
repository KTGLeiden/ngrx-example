import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  constructor(private readonly http: HttpClient) {}

  public get(): Observable<number> {
    return this.http.get<number>('http://localhost:1234/cars/count');
  }
}
