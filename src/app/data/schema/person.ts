import { Address } from './address';

export interface Person {
  id: number;
  name: string;
  surname: string;
  dateOfBirth: Date;
  gender: number;
  address: Address;
}
