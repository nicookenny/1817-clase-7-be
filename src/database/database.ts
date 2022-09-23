import { readFile, writeFile } from 'fs/promises';
import { v4 } from 'uuid';
import { IUser, User } from './UserModel';

const DATABASE = 'users.json';

export const getUser = async (ID: string) => {
  const users = await getUsers();

  return users.find((user) => user.ID === ID);
};

export const getUsers = async (): Promise<User[]> => {
  const data = await readFile(DATABASE);

  return JSON.parse(data.toString());
};

export const createUser = async (user: IUser) => {
  const users = await getUsers();

  const newUser = new User(user);

  users.push(newUser);

  await writeFile(DATABASE, JSON.stringify(users));

  return newUser;
};

export const deleteUser = async (ID: string) => {
  const users = await getUsers();

  const newUsers = users.filter((user) => user.ID !== ID);

  await writeFile(DATABASE, JSON.stringify(newUsers));

  return ID;
};

export const updateUser = async (ID: string, user: IUser) => {
  const existUser = await getUser(ID);
  const updatedUser = {
    ...existUser,
    ...user,
  };

  await deleteUser(ID);

  const users = await getUsers();

  await writeFile(DATABASE, JSON.stringify([...users, updatedUser]));

  return updatedUser;
};
