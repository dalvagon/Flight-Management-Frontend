import { Baggage } from './baggage';
import { Flight } from './flight';
import { Person } from './person';

export interface Passenger {
  id: string;
  person: Person;
  flight: Flight;
  weight: 75;
  allergies: [];
  baggages: Baggage[];
}
