// require('dotenv').config()
// const nodemailer = require('nodemailer');


// const ADMIN_EMAIL = process.env.ADMIN_EMAIL
// const GMAIL_USER = process.env.GMAIL_USER;
// const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;



// async function sendMailFromNodeMailer() {

//     const transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: process.env.SMTP_PORT,
//         auth: {
//             user: GMAIL_USER, 
//             pass: GMAIL_PASSWORD,
//         },
//         tls: {
//             rejectUnauthorized: false
//           }
//     });
    
//     const mailOptions = {
//         from: "ecommerce",
//         to: ADMIN_EMAIL,
//         subject: `Nuevo usuario registrado`,     
//         html: "<h1>hola usuario</h1>"
//     }
//     try {
//         const info = await transporter.sendMail(mailOptions);
//         console.log(info);
//     } catch (err) {
//         console.log(err);
//     }
// }

// module.exports = sendMailFromNodeMailer
