export interface Cruise {
  id: string;
  name: string;
  participantIds: string[];
  startPortId: string;
  endPortId: string;
  visitedPortIds: string[];
  sailboatId: string;
  skipperId: string;
  updatedAt: Date;
}
