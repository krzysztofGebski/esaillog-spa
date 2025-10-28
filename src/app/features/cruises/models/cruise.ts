import { Sailor } from '../../sailors/models/sailor';
import { Port } from '../../ports/models/port';
import { Sailboat } from '../../sailboats/models/sailboat';

export interface Cruise {
  id: string;
  name: string;
  participants: Set<Sailor>;
  startPort: Port;
  endPort: Port;
  visitedPorts: Set<Port>;
  sailboat: Sailboat;
  skipper: Sailor;
  updatedAt: string;
}
