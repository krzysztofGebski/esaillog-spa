import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { SailorResponse } from '../models/sailor-response';
import { ENV_CONFIG } from '../../../core/config/environment-config';
import { Sailor } from '../models/sailor';

@Injectable({
  providedIn: 'root',
})
export class SailorsApiService {
  private http = inject(HttpClient);
  private environmentConfig = inject(ENV_CONFIG);

  getSailors(): Observable<Sailor[]> {
    return this.http
      .get<SailorResponse[]>(this.environmentConfig.apiUrl + '/sailors')
      .pipe(map((dto: SailorResponse[]) => dto.map(this.mapDtoToModel)));
  }

  getSailor(uuid: string): Observable<Sailor> {
    return this.http
      .get<SailorResponse>(`${this.environmentConfig.apiUrl}/sailors}/${uuid}`)
      .pipe(map((dto: SailorResponse) => this.mapDtoToModel(dto)));
  }

  private mapDtoToModel(dto: SailorResponse): Sailor {
    return {
      id: dto.id,
      firstName: dto.firstName,
      lastName: dto.lastName,
      email: dto.email,
      cruiseIds: dto.cruiseIds,
      skipperedCruiseIds: dto.skipperedCruiseIds,
      updatedAt: new Date(dto.updatedAt),
    };
  }
}
