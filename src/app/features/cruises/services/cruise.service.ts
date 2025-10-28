import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENV_CONFIG } from '../../../core/config/environment-config';
import { Observable } from 'rxjs';
import { Cruise } from '../models/cruise';

@Injectable({
  providedIn: 'root',
})
export class CruiseService {
  private http = inject(HttpClient);
  private environmentConfig = inject(ENV_CONFIG);

  getCruises(): Observable<Cruise[]> {
    return this.http.get<Cruise[]>(this.environmentConfig.apiUrl + '/cruises');
  }
}
