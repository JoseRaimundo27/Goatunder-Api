import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

app.use("/", userRoutes)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
