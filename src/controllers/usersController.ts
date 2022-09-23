import { Request, Response } from 'express';
import { UsersService } from '../services/usersService';

export class UsersController {
  constructor() {}

  static async createUser(req: Request, res: Response) {
    try {
      const { body } = req;
      const { name, lastname, email, birthdate, address } = body;
      const createdUser = await UsersService.createUser({
        name,
        lastname,
        email,
        birthdate,
        address,
      });
      res.status(200).send({
        user: createdUser,
      });
    } catch (error: any) {
      res.status(400).send({
        error: error.message,
      });
    }
  }

  static async getUsers(req: Request, res: Response) {
    const { fields } = req.query;
    const stringFields: string[] = `${fields}`.split(',');

    const users = await UsersService.getUsers(stringFields);
    res.status(200).send({ users });
  }
}
