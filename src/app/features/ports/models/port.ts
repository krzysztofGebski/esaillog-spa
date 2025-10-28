import { Cruise } from '../../cruises/models/cruise';

export interface Port {
  id: string;
  name: string;
  description: string;
  cruises: Set<Cruise>;
  updatedAt: string;
}
