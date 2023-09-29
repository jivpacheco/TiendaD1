const ErrorHandler = require('../utils/errorHandler')

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.mensaje = err.mensaje || "Internal Server Error"

    res.status(err.statusCode).json({
        success: false,
        message: err.stack
    })

    //Error clave duplicada en Mongoose
    if (err.code === 11000) {
        const message = `Clave Duplicada ${Object.keys(err.keyValue)}`
        error = new ErrorHandler(message, 400)
    }

    // Error en JWT token
    if (err.name === 'JsonWebTokenError') {
        const message = 'Token de Json Web es Invalido, Intentelo de nuevo'
        error = new ErrorHandler(message, 400)
    }

    // Error JWT token expirado
    if (err.name === 'TokenExpiredError') {
        const message = 'El Token de JWT esta Expirado, Intentalo de de Nuevo'
        error = new ErrorHandler(message, 400)
    }

}