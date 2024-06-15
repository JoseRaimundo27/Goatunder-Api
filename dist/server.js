"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const usuarios = [
    {
        id: 0,
        username: "joserasj",
        password: "12345"
    },
    {
        id: 1,
        username: "admin",
        password: "admin"
    }
];
app.get("/", (req, res) => {
    res.status(200).send("Curso");
});
app.get("/users", (req, res) => {
    res.status(200).json(usuarios);
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
