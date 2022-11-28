import { Airport } from './airport';
import { Passenger } from './passenger';

export interface Flight {
  id: string;
  departureDate: Date;
  arrivalDate: Date;
  passengerCapacity: number;
  baggageWeightCapacity: number;
  maxWeightPerBaggage: number;
  maxBaggageWeightPerPassenger: number;
  maxBaggageWidth: number;
  maxBaggageHeight: number;
  maxBaggageLength: number;
  passengers: Passenger[];
  departureAirport: Airport;
  destinationAirport: Airport;
  city: string;
  intermediateStops: Airport[];
}
