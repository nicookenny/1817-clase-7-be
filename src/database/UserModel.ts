import { v4 } from 'uuid';
export interface IUser {
  name: string;
  email: string;
  lastname: string;
  address: string;
  birthdate: string;
}

export class User {
  ID: string;
  name: string;
  lastname: string;
  email: string;
  address: string;
  birthdate: string;
  constructor({ name, lastname, birthdate, address, email }: IUser) {
    this.ID = v4();
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.birthdate = birthdate;
    this.address = address;
  }
}
