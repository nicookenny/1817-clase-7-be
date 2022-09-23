import { NextFunction, Request, Response } from 'express';

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { headers } = req;
    const token = headers.authorization;

    if (!token) {
      throw new Error('Se debe enviar el header authorization con un token valido');
    }

    const canContinue = +token > 0 && +token < 10;

    const arr = [
      { ID: 1 },
      { ID: 2 },
      { ID: 3 },
      { ID: 4 },
      { ID: 5 },
      { ID: 6 },
      { ID: 7 },
      { ID: 8 },
      { ID: 9 },
    ];
    //@ts-ignore
    req.user = arr.find((user) => user.ID === +token);

    if (!canContinue) {
      throw new Error('El token enviado en el header es inválido');
    }

    next();
  } catch (error) {
    next(error);
  }
};
