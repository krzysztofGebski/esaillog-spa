import { Cruise } from '../../cruises/models/cruise';

export interface Sailor {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cruises: Cruise[];
  skipperedCruises: Cruise[];
  updatedAt: string;
}
