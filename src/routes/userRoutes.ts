import { Router } from 'express';
import { createUsers, deleteUser, getHome, getUsers, getUsersById, loginUser, updateUser } from '../controllers/userControllers';

const router = Router();

router.get('/', getHome);
router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/login', loginUser)

export default router;
