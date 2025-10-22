import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sailor } from './sailor.model';

@Injectable({
  providedIn: 'root',
})
export class SailorsService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/sailors';

  getSailors(): Observable<Sailor[]> {
    return this.http.get<Sailor[]>(this.apiUrl);
  }
}
