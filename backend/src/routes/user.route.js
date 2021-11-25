const { Router } = require('express');
const router = Router();

const User = require('../controller/userCrontroller')

router.get('/', User.listarUser);

module.exports = router;