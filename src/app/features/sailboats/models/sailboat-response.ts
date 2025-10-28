import { SailboatType } from './sailboat-type';

export interface SailboatResponse {
  id: string;
  name: string;
  registerNumber: string;
  type: SailboatType;
  lengthInFeet: number;
  engineKW: number;
  cruiseIds: string[];
  updatedAt: string;
}
