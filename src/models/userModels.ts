import { Int32 } from "mongodb";
import mongoose, {Schema, Document} from "mongoose";
import Iusuario from "../types/Iusuario";

const userSchema : Schema = new Schema({
    id: {type: Schema.Types.ObjectId, auto:true},
    username: { type:String, required: true, unique: true},
    password: {type: String, required: true}
})

const User = mongoose.model<Iusuario>('users', userSchema) //Ligando coleção a schema

export default User