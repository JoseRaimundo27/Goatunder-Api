import { Router } from 'express';
import { createUsers, deleteUser, getHome, getUsers, getUsersById, updateUser } from '../controllers/userControllers';

const router = Router();

router.get('/', getHome);
router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
