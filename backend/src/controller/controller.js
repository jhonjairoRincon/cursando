const cursos = {}

const curso = require('../models/cursos')

cursos.listarCurso = async (req,res)=>{
    await res.send('listar curso')
};
cursos.listarCursos = async (req,res)=>{
    const cursosdb = await curso.find()
    res.json(cursosdb)
};
cursos.CrearCurso = async(req,res)=>{
    const newCurso = new curso(req.body)
    await newCurso.save()
    res.send("curso creado")
};
cursos.ActualizarCurso = (req,res)=>{};
cursos.EliminarCurso = (req,res)=>{};


module.exports = cursos;
