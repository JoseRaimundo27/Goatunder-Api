import express from 'express';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv'

const app = express();

//Carregar configurações do dotenv:
dotenv.config()
// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

app.use("/", userRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
