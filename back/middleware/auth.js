const User = require('../models/auth')
const jwt = require('jsonwebtoken')
const errorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const ErrorHandler = require('../utils/errorHandler')

// verificar si estamos autenticados (Exitencia y veracidad del token)
exports.isAuthenticatedUSer = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies

    if (!token) {
        return next(new ErrorHandler('Debe Iniciar Sesion para Acceder a este recurso', 401))
    }

    const decoder = jwt.decode(token, process.env.JWT_SECRET)
    //como comparando las contraseñas pero en este caso decodifica el jwt
    req.user = await User.findById(decoder.id)
    next()
})

//Capturar el rol del usuario
exports.authorizeRoles = (...roles) =>{
    return (req, res, next) =>{
        if (roles.includes(req.user.role)) {
            return next(new errorHandler(`Role (${req.user.role}) No esta autorizado para entrar a esta area`),402)
        }
        next()
    }
}
