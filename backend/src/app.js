const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const createRoles = require('./libs/initialSetap')

const app = express();
createRoles.createRoles();
const cursoRoute = require('./routes/curso.route');
const authRoute = require('./routes/auth.route');

app.set('port',process.env.PORT || 8000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/cursos",cursoRoute);
app.use("/api/auth",authRoute);


module.exports = app;
