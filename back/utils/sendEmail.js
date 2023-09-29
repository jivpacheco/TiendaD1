// const nodemailer = require('nodemailer')

// const sendEmail = async options => {

//     const transport = nodemailer.createTransport({
//         host: "sandbox.smtp.mailtrap.io",
//         port: 2525,
//         auth: {
//             user: "715bf7b55b9957",
//             pass: "08f00f10de5ba6"
//         }
//     });

//     const mensaje = {
//         from: 'TiendaD1 Store <noreply@tiendad1.com>',
//         to: options.email,
//         subject: options.subject,
//         text: options.mensaje
//     }
//    await transport.sendMail(mensaje)
// }

// module.exports = sendEmail;

const nodemailer = require('nodemailer')

const sendEmail = async options => {

    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
            user: "proyecto_devs_2023@outlook.com",
            pass: "lgmgbxbslmlmxzfa"
        }
    });

    const mensaje = {
        from: 'TiendaD1 Store <proyecto_devs_2023@outlook.com>',
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }
   await transport.sendMail(mensaje)
}

module.exports = sendEmail;