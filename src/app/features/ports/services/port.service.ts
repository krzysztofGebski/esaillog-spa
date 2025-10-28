import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENV_CONFIG } from '../../../core/config/environment-config';
import { Observable } from 'rxjs';
import { Port } from '../models/port';

@Injectable({
  providedIn: 'root',
})
export class PortService {
  private http = inject(HttpClient);
  private environmentConfig = inject(ENV_CONFIG);

  getPorts(): Observable<Port[]> {
    return this.http.get<Port[]>(this.environmentConfig.apiUrl + '/ports');
  }
}
