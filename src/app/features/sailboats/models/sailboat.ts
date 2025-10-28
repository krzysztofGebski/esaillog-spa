import { SailboatType } from './sailboat-type';
import { Cruise } from '../../cruises/models/cruise';

export interface Sailboat {
  id: string;
  name: string;
  registerNumber: string;
  sailboatType: SailboatType;
  lengthInFeet: number;
  engineKW: number;
  cruises: Cruise[];
  updatedAt: string;
}
