import { Request, Response } from 'express';
import { usuarios } from '../data/users';
import jwt from 'jsonwebtoken';
import bcrypt, { hash } from 'bcryptjs'
import doetenv from 'dotenv'
import Iusuario from '../types/Iusuario';
import { addUser, deleteUserById, findUserById, findUserByName, findUserIndexById, isUsernameUsed, updateUserById } from '../services/userServices';

doetenv.config()

const JWT_SECRET = process.env.JWT_SECRET || "12345";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

export const getHome = (req: Request, res: Response) => {
  res.status(200).send("Bem Vindo Ao home da Api Goatunder")
};

export const createUsers = async (req: Request, res: Response) => {
  const { username, password } = req.body

  if (isUsernameUsed(username)) {
    return res.status(400).send("Nome de usuário já existe.");
  }
  try {
    const hashedPassword: string = await bcrypt.hash(password, 10)
    const newUser: Iusuario = {
      id: usuarios.length + 1,
      username,
      password: hashedPassword
    }
    addUser(newUser)
    res.status(201).send("Usuário cadastrado com sucesso!")
  }catch (error) {
    res.status(500).send("Erro ao cadastrar usuário.");
  }
  
};

export const getUsers = (req: Request, res: Response) => {
  res.status(200).json(usuarios);
};

export const getUsersById = (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const user = findUserById(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("Usuário não encontrado.");
  }
}

export const updateUser = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  if (updateUserById(userId, updatedUser)) {
    res.status(200).send("Usuário atualizado com sucesso!");
  } else {
    res.status(404).send("Usuário não encontrado.");
  }
};

export const deleteUser = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  if (findUserIndexById(userId) !== -1) {
    deleteUserById(userId)
    res.status(200).send("Usuário deletado com sucesso!");
  } else {
    res.status(404).send("Usuário não encontrado.");
  }
};

export const loginUser = (req : Request, res : Response) => {
  const {username, password} = req.body;
  const user = findUserByName(username);

  if (user && bcrypt.compareSync(password, user.password)) { //testa string em comp com a hash
    //Se a senha é a mesma, criarei um token de acesso:
    const token = jwt.sign( {id: user.id, username: user.username}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN})
    res.status(200).json({ token });
  } else {
    res.status(401).send("Credenciais inválidas.");
  }
}


