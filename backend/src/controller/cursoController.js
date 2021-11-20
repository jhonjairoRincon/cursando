const curso = require('../models/cursosModels')

const cursos = {}

//filtrar 
cursos.listarCurso = async (req,res)=>{
    const cursodb = await curso.findById(req.params.id)
    res.send(cursodb)

};
//listar
cursos.listarCursos = async (req,res)=>{
    const cursosdb = await curso.find()
    res.json(cursosdb)
};
// crear 
cursos.CrearCurso = async(req,res)=>{
    const newCurso = new curso(req.body)
    await newCurso.save()
    res.send({message: 'curso creado'})
};
//actualizar
cursos.ActualizarCurso = async(req,res)=>{
     await curso.findByIdAndUpdate(req.params.id, req.body)
     res.json({status: 'curso actualizado'})

};
//aliminar
cursos.EliminarCurso = async (req,res)=>{
    curso.findByIdAndDelete(req.params.id)
    res.json({status: 'curso eliminado'})
};

//agregar cursos

cursos.agregarcurso = async (req,res) =>{
    
}


module.exports = cursos;
