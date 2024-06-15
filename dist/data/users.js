"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUsuariosData = exports.getUsuariosData = void 0;
let usuarios = [
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
const getUsuariosData = () => usuarios;
exports.getUsuariosData = getUsuariosData;
const setUsuariosData = (newUsers) => {
    usuarios = newUsers;
};
exports.setUsuariosData = setUsuariosData;
