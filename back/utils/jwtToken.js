// crear y enviar un token guardado en una Cookie
const tokenEnviado = (user, statusCode, res) =>{
    //creamos el token
    const token = user.getJwtToken();
    //Opciones del Token
    const Opciones = {
        expired: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME*24*60*60*1000
        ),
        httpOnly: true
    }

    res.status(statusCode).cookie('token',token, Opciones).json({
        success: true,
        token,
        user
    })

}
module.exports = tokenEnviado