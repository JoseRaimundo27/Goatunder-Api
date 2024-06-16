import { usuarios } from '../data/users';
import Iusuario from '../types/Iusuario';

export const isUsernameUsed = (username: string): boolean => {
    return usuarios.some(user => user.username === username);
};


export const addUser = (newUser: Iusuario): void => {
    usuarios.push(newUser);
};

export const findUserByName = (username : string) : Iusuario | undefined => {
    return usuarios.find(user => user.username === username)
}

export const findUserById = (id: number): Iusuario | undefined => {
    return usuarios.find(user => user.id === id);
};

export const findUserIndexById = (id: number): number => {
    return usuarios.findIndex(user => user.id === id);
};

export const deleteUserById = (id: number): void => {
    const index = findUserIndexById(id);
    if (index !== -1) {
        usuarios.splice(index, 1);
    }
};

export const updateUserById = (id: number, updatedUser: Iusuario): boolean => {
    const index = findUserIndexById(id);
    if (index !== -1) {
        usuarios[index] = updatedUser;
        return true;
    }
    return false;
};