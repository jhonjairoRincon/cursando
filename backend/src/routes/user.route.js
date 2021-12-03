const { Router } = require('express');
const router = Router();

const User = require('../controller/userCrontroller')

router.get('/', User.listarUser);
router.get('/:id',User.filtrarUser);

module.exports = router;