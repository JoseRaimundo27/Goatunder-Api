import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET || '1234'

//Middleware para validar token
export const authTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization']
    const token = authHeader?.split(' ')[1]

    if (token == null) {
        return res.status(401).send("Token não fornecido.");
    }

    jwt.verify(token,JWT_SECRET, (err,user) => {
        if (err) {
            return res.status(403).send("Token inválido.");
        }

        next();
        
    })
}