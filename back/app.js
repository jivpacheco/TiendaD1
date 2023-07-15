const express = require('express');

const app = express();

app.use(express.json());

const productos = require('./routes/productsRoute');

app.use('/api', productos);

module.exports = app
