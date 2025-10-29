export interface Sailor {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cruiseIds: string[];
  skipperedCruiseIds: string[];
  updatedAt: Date;
}
