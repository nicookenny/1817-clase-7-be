import { Router } from 'express';
import { UsersController } from '../controllers/usersController';
import { validatePayload } from '../middlewares/validatePayload';

const router = Router();

router.post('/', validatePayload, UsersController.createUser);
router.get('/', UsersController.getUsers);

export default router;
