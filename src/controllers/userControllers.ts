import { Request, Response } from 'express';
import Iusuario from '../types/Iusuario';
import { getUsuariosData, setUsuariosData } from '../data/users';



export const getUsers  = (req: Request, res: Response) => {
  res.status(200).json(getUsuariosData);
};

export const updateUsers = (req: Request, res: Response) => {
    const users: Iusuario[] = req.body;
  
    // Adiciona validação aqui conforme necessário
    if (Array.isArray(users)) {
      setUsuariosData(users);
      res.status(200).json({ message: 'Usuários atualizados com sucesso.' });
    } else {
      res.status(400).json({ message: 'Dados inválidos.' });
    }
  };

export const getHome = (req: Request, res: Response) => {
  res.status(200).send("Bem Vindo Ao home da Api Goatunder")
};

