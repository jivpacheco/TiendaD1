const app = require('./app')
const connectDatabase = require('./config/database');
const dotenv = require('dotenv');

dotenv.config({path: 'back/config/config.env'})

connectDatabase();

const PUERTO = process.env.PORT || 3000;
const MODO = process.env.NODE_ENV;

const server = app.listen(process.env.PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${process.env.PORT} en modo ${MODO}`)

})