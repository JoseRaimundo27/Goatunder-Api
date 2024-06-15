import { Router } from 'express';
import { getHome, getUsers, updateUsers } from '../controllers/userControllers';


const router = Router();

router.get('/', getHome);
router.get('/userList', getUsers);
router.put('/createUsers', updateUsers); 

export default router;
