// import { Request, Response} from 'express';
// import nodemailer from 'nodemailer';

// import {ADMIN_EMAIL} from '../../../config/index'
// import {GMAIL_USER} from '../../../config/index';
// import {GMAIL_PASSWORD} from '../../../config/index';
// import {SMTP_PORT} from '../../../config/index';


// export const sendMailFromNodeMailer = async (req: Request, res: Response) => {
    
//     const { name, lastname, age, phone, email, address, city, country } = req.body;
//     const usuarioNuevo = localStorage.getItem('usario')
//     console.log(usuarioNuevo)
//     const transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: SMTP_PORT,
//         auth: {
//             user: GMAIL_USER,
//             pass: GMAIL_PASSWORD,
//         },
//         tls: {
//             rejectUnauthorized: false
//         }
//     });
    
//     const mailOptions = {
//         from: "ecommerce",
//         to: ADMIN_EMAIL,
//         subject: "Nuevo usuario registrado",
    
//         html: `usuario: 
//                     // Nombre: ${name} ${lastname}, 
//                     // Edad: ${age},
//                     // Telefono: ${phone},
//                     // Correo: ${email},
//                     // Dirección: ${address},
//                     // Ciudad: ${city},
//                     // Pais: ${country}`
//     }

//     try {
//         const info = await transporter.sendMail(mailOptions);
//         console.log(info);
//     } catch (err) {
//         console.log(err);
//     }
// }