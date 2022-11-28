import { Address } from './adress';

export interface Person {
  id: number;
  name: string;
  surname: string;
  dateOfBirth: Date;
  gender: number;
  address: Address;
}
