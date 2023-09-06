const User = require('../models/auth.js')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')

//Registrar un nuevo usuario /api/registrar

exports.registroUsuario = catchAsyncErrors(async(req, res, next) =>{

    const {nombre, email, password} = req.body;
   
    const user = await User.create({
        nombre,
        email,
        password,
        avatar:{
            public_id:"370-456322",
            url: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
        }
    })
    
    const token = user.getJwtToken();


    res.status(201).json({
        success: true,
        token,
        user
    })
    
})