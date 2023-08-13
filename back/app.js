const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/errors')

app.use(express.json());

const productos = require('./routes/productsRoute');
const usuarios = require('./routes/authRoute')


app.use('/api', productos);
app.use('/api',usuarios);


//Middleware para manejar errores 
app.use(errorMiddleware);

module.exports = app
