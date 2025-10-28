export interface CruiseResponse {
  id: string;
  name: string;
  participantsIds: string[];
  startPortId: string;
  endPortId: string;
  visitedPortsIds: string[];
  sailboatId: string;
  skipperId: string;
  updatedAt: string;
}
