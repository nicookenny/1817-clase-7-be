import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { serverConfig } from './config/serverConfig';
import { authenticate } from './middlewares/authenticate';
import usersRouter from './routes/usersRoutes';

const server = express();
server.use(express.json());

server.use('/users', authenticate, usersRouter);

server.listen(serverConfig.PORT, () => {
  console.log(`Server running http://localhost:${serverConfig.PORT}`);
});
