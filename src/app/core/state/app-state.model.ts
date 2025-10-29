import { Sailor } from '../../features/sailors/models/sailor';
import { Cruise } from '../../features/cruises/models/cruise';
import { Sailboat } from '../../features/sailboats/models/sailboat';
import { Port } from '../../features/ports/models/port';

export type EntityState<T> = {
  entities: Map<string, T>;
  isLoading: boolean;
  error: string | null;
};

export interface AppState {
  sailors: EntityState<Sailor>;
  cruises: EntityState<Cruise>;
  sailboats: EntityState<Sailboat>;
  ports: EntityState<Port>;
}
