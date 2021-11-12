const cursos = {}

cursos.listarCurso = (req,res)=>{
    res.send('listar curso')
};
cursos.listarCursos = (req,res)=>{
    res.send('listar cursos')
};
cursos.CrearCurso = (req,res)=>{};
cursos.ActualizarCurso = (req,res)=>{};
cursos.EliminarCurso = (req,res)=>{};


module.exports = cursos;
