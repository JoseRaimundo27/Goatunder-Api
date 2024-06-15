import { Request, Response } from 'express';
import { usuarios } from '../data/users';

export const getHome = (req: Request, res: Response) => {
    res.status(200).send("Bem Vindo Ao home da Api Goatunder")
  };
  

export const createUsers = (req: Request, res: Response) => {
    usuarios.push(req.body)
    res.status(201).send("Usuário cadastrado com sucesso!")
  };

export const getUsers  = (req: Request, res: Response) => {
  res.status(200).json(usuarios);
};

export const getUsersById = (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const user = usuarios.find(user => user.id === id);
    if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).send("Usuário não encontrado.");
      }
}

export const updateUser = (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
  
    const userIndex = usuarios.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      usuarios[userIndex] = updatedUser;
      res.status(200).send("Usuário atualizado com sucesso!");
    } else {
      res.status(404).send("Usuário não encontrado.");
    }
  };

  export const deleteUser = (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    const userIndex = usuarios.findIndex(user => user.id === userId);
  
    if (userIndex !== -1) {
      usuarios.splice(userIndex, 1);
      res.status(200).send("Usuário deletado com sucesso!");
    } else {
      res.status(404).send("Usuário não encontrado.");
    }
  };



