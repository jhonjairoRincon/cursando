const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-cursos')
    .then((db) => console.log('DB concectado'))
    .catch((err) => console.error(err))