import { createUser, getUser, getUsers } from '../database/database';
import { IUser } from '../database/UserModel';

export class UsersService {
  constructor() {}

  static async createUser(user: IUser) {
    const listUsers = await getUsers();

    const existUser = listUsers.find((_user) => user.email === _user.email);

    if (existUser) {
      throw new Error('El email no se puede repetir');
    }

    return createUser(user);
  }

  static async getUsers(fields: string[]) {
    const users = await getUsers();
    return users.map((user) => {
      const obj: any = { ...user };

      //si no mande fields, traeme todo el objeto!!
      const objKeys = Object.keys(obj);
      objKeys.forEach((key) => (fields.includes(key) ? null : delete obj[key]));

      return obj;
    });
  }
}
