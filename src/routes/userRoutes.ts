import { Router } from 'express';
import { createUsers, deleteUser, getHome, getUsers, getUsersById, loginUser, updateUser } from '../controllers/userControllers';
import { authTokenMiddleware } from '../middlewares/authTokenMiddleware';

const router = Router();

router.get('/', getHome);
//Rotas protegidas por token de acesso ( apenas logados)
router.get('/users',authTokenMiddleware, getUsers);
router.get('/users/:id',authTokenMiddleware, getUsersById);
router.put('/users/:id',authTokenMiddleware, updateUser);
router.delete('/users/:id', authTokenMiddleware,deleteUser);

//Rotas para autenticação:
router.post('/registrar', createUsers);
router.post('/login', loginUser) //Rota para fazer login: cria o token da autenticação

//Rota protegida, apenas usuários admins:
// router.get('/admin' , authTokenMiddleware,)

export default router;
