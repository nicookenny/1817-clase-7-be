import { NextFunction, Request, Response } from 'express';

export const validatePayload = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req;

    const keys = ['name', 'lastname', 'email', 'address', 'birthdate'];
    const bodyKeys = Object.keys(body);

    const keysFaltantes = keys.filter((key) => !bodyKeys.includes(key));
    const keysExtras = bodyKeys.filter((key) => !keys.includes(key));

    if (keysFaltantes.length) {
      throw new Error('El payload que enviaste no tiene todas las propiedades esperadas');
    }

    if (keysExtras.length) {
      throw new Error('El payload que enviaste tiene propiedades que no son esperadas por la API');
    }

    next();
  } catch (error) {
    next(error);
  }
};
