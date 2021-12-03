import { cursos } from "./curso.model";

export interface userInstructor{
    email: String,
    password: String,
    _id: String,
    name: String,
    categoria: String,
    curso: cursos,
    createdAt: String,
    updatedAt: String
}