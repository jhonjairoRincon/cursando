const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const createRoles = require('./libs/initialSetap')

const app = express();
createRoles.createRoles();
const cursoRoute = require('./routes/curso.route');
const authRoute = require('./routes/auth.route');
const userRoute = require('./routes/user.route')

app.set('port',process.env.PORT || 8000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/cursos",cursoRoute);
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute)



module.exports = app;
