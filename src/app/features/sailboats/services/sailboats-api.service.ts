import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENV_CONFIG } from '../../../core/config/environment-config';
import { SailboatResponse } from '../models/sailboat-response';

@Injectable({
  providedIn: 'root',
})
export class SailboatsApiService {
  private http = inject(HttpClient);
  private environmentConfig = inject(ENV_CONFIG);

  getSailboats() {
    return this.http.get<SailboatResponse[]>(this.environmentConfig.apiUrl + '/sailboats');
  }
}
