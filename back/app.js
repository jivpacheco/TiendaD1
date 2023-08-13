const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/errors')

app.use(express.json());

const productos = require('./routes/productsRoute');

app.use('/api', productos);

//Middleware para manejar errores 
app.use(errorMiddleware);

module.exports = app
