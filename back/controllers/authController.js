const User = require('../models/auth.js')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const tokenEnviado = require('../utils/jwtToken.js');

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
