import { Passenger } from './passenger';

export interface Baggage {
  id: string;
  passenger: Passenger;
  weight: number;
  width: number;
  height: number;
  length: number;
}
