const app = require('./app');

const dotenv = require('dotenv');

dotenv.config({path: 'back\config\config.env'})

const PUERTO = process.env.PORT || 4000;
const MODO = process.env.NODE_ENV;

const server = app.listen(process.env.PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO} en modo ${MODO}`)

})