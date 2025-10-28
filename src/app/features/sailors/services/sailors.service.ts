import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SailorResponse } from '../models/sailor-response';
import { ENV_CONFIG } from '../../../core/config/environment-config';

@Injectable({
  providedIn: 'root',
})
export class SailorsService {
  private http = inject(HttpClient);
  private environmentConfig = inject(ENV_CONFIG);

  getSailors(): Observable<SailorResponse[]> {
    return this.http.get<SailorResponse[]>(this.environmentConfig.apiUrl + '/sailors');
  }

  getSailor(uuid: string): Observable<SailorResponse> {
    return this.http.get<SailorResponse>(`${this.environmentConfig.apiUrl}/sailors}/${uuid}`);
  }
}
