import { cursos } from "./curso.model";

export interface userSingUp{
    email: String,
    password: String,
    _id: String,
    name: String,
    categoria: String,
   // curso: cursos,
    createdAt: String,
    updatedAt: String,
    roles:String
}