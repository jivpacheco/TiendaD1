const mongoose = require('mongoose');

//metodo para conexion a la BD

const connectDatabase = () =>{
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(con =>{
        console.log(`Base de datos conectada con el servidor ${con.connection.host}`)
    })
    .catch(err =>{
        console.log(`MongoDb not connect to server ${err}`)
    })
}

module.exports = connectDatabase;