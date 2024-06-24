import { Request, Response } from 'express';
import User from '../models/userModels';
import jwt from 'jsonwebtoken';
import bcrypt, { hash } from 'bcryptjs'
import doetenv from 'dotenv'
import Iusuario from '../types/Iusuario';
import mongoose from 'mongoose';

doetenv.config()

const JWT_SECRET = process.env.JWT_SECRET || "12345";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

export const getHome = (req: Request, res: Response) => {
  res.status(200).send("Bem Vindo Ao home da Api Goatunder")
};

export const getUsers = async (req: Request, res: Response) => {
  const listaUsuarios = await User.find({})
  res.status(200).json(listaUsuarios);
};

export const getUsersById = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const user = User.findById(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("Usuário não encontrado.");
  }
}

export const updateUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const updateUser = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateUser, { new: true })
    if (updatedUser) {
      res.status(200).send("Usuário atualizado com sucesso!");
    }
    else {
      res.status(404).send("Usuário não encontrado.");
    }
  } catch (err) {
    res.status(500).send("Erro ao atualizar usuário.");
  }


};

export const deleteUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  try {
    const deletedUser = await User.findByIdAndDelete(userId)
    if (deletedUser) {
      res.status(200).send("Usuário deletado com sucesso!");
    }
    else {
      res.status(404).send("Usuário não encontrado.");
    }
  } catch (err) {
    res.status(500).send("Erro ao deletar usuário.");
  }

};

export const createUsers = async (req: Request, res: Response) => {
  const { username, password } = req.body

  try {
    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return res.status(400).send("Nome de usuário já existe.");
    }
    const hashedPassword: string = await bcrypt.hash(password, 10)
    const id = new mongoose.Types.ObjectId();
    const newUser: Iusuario = new User({ id, username, hashedPassword })
    res.status(201).send("Usuário cadastrado com sucesso!")

  } catch (error) {
    res.status(500).send("Erro ao cadastrar usuário.");
  }

};

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne(username);

    if (user && bcrypt.compareSync(password, user.password)) { //testa string em comp com a hash
      //Se a senha é a mesma, criarei um token de acesso:
      const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })

      res.status(200).json({ token, username }); //Mando o token e o nome do usuário logado
    } else {
      res.status(401).send("Credenciais inválidas.");
    }
  }catch (err) {
    res.status(500).send("Erro ao logar usuário.");
  }
  
}


