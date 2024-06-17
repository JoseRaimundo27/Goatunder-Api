import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';

// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();

// Middleware para habilitar CORS
app.use(cors());

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Montar userRoutes no caminho base /api
app.use('/api', userRoutes);

// Usar a variável de ambiente PORT ou padrão para 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
