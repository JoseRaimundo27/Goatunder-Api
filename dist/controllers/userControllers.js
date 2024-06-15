"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUsersById = exports.getUsers = exports.createUsers = exports.getHome = void 0;
const users_1 = require("../data/users");
const getHome = (req, res) => {
    res.status(200).send("Bem Vindo Ao home da Api Goatunder");
};
exports.getHome = getHome;
const createUsers = (req, res) => {
    users_1.usuarios.push(req.body);
    res.status(201).send("Usuário cadastrado com sucesso!");
};
exports.createUsers = createUsers;
const getUsers = (req, res) => {
    res.status(200).json(users_1.usuarios);
};
exports.getUsers = getUsers;
const getUsersById = (req, res) => {
    const id = Number(req.params.id);
    const user = users_1.usuarios.find(user => user.id === id);
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(404).send("Usuário não encontrado.");
    }
};
exports.getUsersById = getUsersById;
const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
    const userIndex = users_1.usuarios.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        users_1.usuarios[userIndex] = updatedUser;
        res.status(200).send("Usuário atualizado com sucesso!");
    }
    else {
        res.status(404).send("Usuário não encontrado.");
    }
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users_1.usuarios.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        users_1.usuarios.splice(userIndex, 1);
        res.status(200).send("Usuário deletado com sucesso!");
    }
    else {
        res.status(404).send("Usuário não encontrado.");
    }
};
exports.deleteUser = deleteUser;
