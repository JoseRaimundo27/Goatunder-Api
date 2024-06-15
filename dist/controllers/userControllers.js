"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHome = exports.updateUsers = exports.getUsers = void 0;
const users_1 = require("../data/users");
const getUsers = (req, res) => {
    res.status(200).json(users_1.getUsuariosData);
};
exports.getUsers = getUsers;
const updateUsers = (req, res) => {
    const users = req.body;
    // Adiciona validação aqui conforme necessário
    if (Array.isArray(users)) {
        (0, users_1.setUsuariosData)(users);
        res.status(200).json({ message: 'Usuários atualizados com sucesso.' });
    }
    else {
        res.status(400).json({ message: 'Dados inválidos.' });
    }
};
exports.updateUsers = updateUsers;
const getHome = (req, res) => {
    res.status(200).send("Bem Vindo Ao home da Api Goatunder");
};
exports.getHome = getHome;
