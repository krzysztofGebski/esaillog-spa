import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sailor } from './models/sailor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SailorsService {

  constructor(private http: HttpClient) { }

  getSailors(): Observable<Sailor[]> {
    return this.http.get<Sailor[]>('http://localhost:8080/sailors');
  }

}
