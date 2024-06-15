import express from 'express';
import Iusuario from './types/Iusuario';

const app = express()

const usuarios:Iusuario[] = [
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
]
app.get("/", (req, res) => {
  res.status(200).send("Curso")
});

app.get("/users", (req,res) => {
    res.status(200).json(usuarios)
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});