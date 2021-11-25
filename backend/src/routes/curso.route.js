const { Router } = require('express');
const router = Router();
const cursos = require('../controller/cursoController')
const verify = require('../middlewares/authjwt')

router.get('/', cursos.listarCursos);
// primero debe verificar el usuario, y debe verificar el tipo de usuario 
router.post('/', [verify.verify, verify.isinstructor], cursos.CrearCurso);
//router.post('/', cursos.agregarcurso);
router.get('/:id', cursos.listarCurso);
router.put('/:id',[verify.verify, verify.isinstructor], cursos.ActualizarCurso);
router.delete('/:id',[verify.verify, verify.isinstructor], cursos.EliminarCurso);


module.exports = router;
