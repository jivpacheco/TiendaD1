const User = require('../models/auth.js')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const tokenEnviado = require('../utils/jwtToken.js');
const sendEmail = require('../utils/sendEmail.js');
const crypto = require('crypto')

//Registrar un nuevo usuario /api/registrar

exports.registroUsuario = catchAsyncErrors(async (req, res, next) => {

    const { nombre, email, password } = req.body;

    const user = await User.create({
        nombre,
        email,
        password,
        avatar: {
            public_id: "370-456322",
            url: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
        }
    })

    tokenEnviado(user, 201, res)

    // const token = user.getJwtToken();
    // res.status(201).json({
    //     success: true,
    //     token,
    //     user
    // })

})

exports.loginUser = catchAsyncErrors(async (req, res, next) => {

    const { email, password } = req.body;
    //revisamos campos estan completos+
    if (!email || !password) {
        return next(new ErrorHandler('Por favor ingrese Email y Contraseña', 400))
    }

    //Buscar el usuario en nuestra base de datos
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return next(new ErrorHandler('Email o Contraseñas Invalidos!!!', 401))

    }

    //Verificar que el passwor ingresado coincida con la del usuario
    const passwordOK = await user.compararPass(password);

    if (!passwordOK) {
        return next(new ErrorHandler('Contraseña Invalida', 401))
    }

    tokenEnviado(user, 200, res)

    // const token = user.getJwtToken();
    // res.status(200).json({
    //     success: true,
    //     token,
    //     user
    // })

})

//Metodo para cerrar sesion
exports.logOut = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: 'Sesion Cerrada con Exito'
    })
})

//Recuperar contraseña - por Olvido
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler('Usuario no se encuentra Registrado', 404))
    }

    const resetToken = user.genResetPasswordToken();
    //para saltar las validaciones de los campos requeridos al actualizar el token y el tiempo de expiracion
    await user.save({ validateBeforeSave: false });

    //Crear una url para hacer el reset de la contraseña
    const resetUrl = `${req.protocol}://${req.get('host')}/api/resetPassword/${resetToken}`
    //crear el mensaje del correo para enviar el link para resetear el password
    const mensaje = `Hola!\n\n Tu link para ajustar una nueva contraseña es el siguiente: \n\n${resetUrl}\n\n
sino solicitaste este Link, por favor comunicarse con soporte.\n\n Att:\nTiendaD1 Store`

    try {
        await sendEmail({
            email: user.email,
            subject: 'TiendaD1 Recuperacion de la Contraseña',
            mensaje
        })

        res.status(200).json({
            success: true,
            messaje: `Correo enviado a ${user.email}`
        })
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });
        return next(new ErrorHandler(error.message, 500))
    }

})

//Resetear la contraseña
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    // Hash el token que llega con la url

    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')

    // buscamos al usuario al que le vamos a resetear la contraseña
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() } // para verificar que sea superior
    })
    
    if (!user) {
        return next(new ErrorHandler('Token Invalido o Expirado', 404))
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler('Contraseñas no Coinciden...', 404))
    }
    // seteamosla contraseña

    user.password = req.body.password
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined; 

    await user.save();
    tokenEnviado(user,200,res);

})


