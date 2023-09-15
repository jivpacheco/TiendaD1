const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/errors')
const cookieParser = require('cookie-parser')

// Uso de constantes Importadas
app.use(express.json());
app.use(cookieParser());

//Importar Rutas
const productos = require('./routes/productsRoute');
const usuarios = require('./routes/authRoute')


app.use('/api', productos);
app.use('/api',usuarios);


//Middleware para manejar errores 
app.use(errorMiddleware);

module.exports = app
