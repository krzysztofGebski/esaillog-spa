export const SAILBOATS_TYPES = ['SLOOP', 'KETCH', 'CATAMARAN'] as const;

export type SailboatType = (typeof SAILBOATS_TYPES)[number];

export interface Sailboat {
  id: string;
  name: string;
  registerNumber: string;
  type: SailboatType;
  lengthInFeet: number;
  engineKW: number;
  cruiseIds: string[];
  updatedAt: Date;
}
