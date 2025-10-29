import { inject, Injectable, signal } from '@angular/core';
import { AppState, EntityState } from './app-state.model';
import { Sailor } from '../../features/sailors/models/sailor';
import { Cruise } from '../../features/cruises/models/cruise';
import { Port } from '../../features/ports/models/port';
import { Sailboat } from '../../features/sailboats/models/sailboat';
import { SailorsApiService } from '../../features/sailors/services/sailors-api.service';
import { CruisesApiService } from '../../features/cruises/services/cruises-api.service';
import { SailboatsApiService } from '../../features/sailboats/services/sailboats-api.service';
import { PortsApiService } from '../../features/ports/services/ports-api.service';

const initialEntityState = <T>(): EntityState<T> => ({
  entities: new Map(),
  isLoading: true,
  error: null,
});

const initialState: AppState = {
  sailors: initialEntityState<Sailor>(),
  cruises: initialEntityState<Cruise>(),
  sailboats: initialEntityState<Sailboat>(),
  ports: initialEntityState<Port>(),
};

@Injectable({
  providedIn: 'root',
})
export class AppStoreService {
  private sailorsApi = inject(SailorsApiService);
  private cruisesApi = inject(CruisesApiService);
  private sailboatsApi = inject(SailboatsApiService);
  private portsApi = inject(PortsApiService);

  private state = signal<AppState>(initialState);
}
