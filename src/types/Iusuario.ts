import { Document } from "mongodb"

interface Iusuario extends Document{
    id: number,
    username: string,
    password: string 
}

export default Iusuario