const { Router } = require('express');
const router = Router();
const cursos = require('../controller/cursoController')

router.get('/', cursos.listarCursos);
router.post('/', cursos.CrearCurso);
router.get('/:id', cursos.listarCurso);
router.put('/:id', cursos.ActualizarCurso);
router.delete('/:id', cursos.EliminarCurso);


module.exports = router;
