import { Country } from './country';
import { City } from './city';

export interface Address {
  id: string;
  number: number;
  street: string;
  city: City;
  country: Country;
}
