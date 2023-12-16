import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SailorsService {

  constructor(private http: HttpClient) { }

  getSailors() {
    return this.http.get('http://localhost:3000/sailors');
  }

}
