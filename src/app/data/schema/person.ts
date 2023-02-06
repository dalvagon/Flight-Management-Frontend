import { Address } from './address';

export interface Person {
  id: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
  gender: string;
  address: Address;
}
