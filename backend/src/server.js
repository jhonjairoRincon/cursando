const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('port',process.env.PORT || 7000);
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/api/cursos",require('./routes/route'))

module.exports = app;
