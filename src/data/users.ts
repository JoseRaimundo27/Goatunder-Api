import Iusuario from '../types/Iusuario';

let usuarios: Iusuario[] = [
  {
    'id': 0,
    'username': "joserasj",
    'password': "12345"
  },
  {
    'id': 1,
    'username': "admin",
    'password': "admin"
  }
];

export const getUsuariosData = () : Iusuario[] => usuarios;

export const setUsuariosData = (newUsers: Iusuario[]): void => {
  usuarios = newUsers;
};


