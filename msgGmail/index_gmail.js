const nodemailer = require('nodemailer');
require('dotenv').config()

const ADMIN_EMAIL = process.env.ADMIN_EMAIL
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

export function enviarEmail() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: process.env.SMTP_PORT,
        auth: {
            user: GMAIL_USER, 
            pass: GMAIL_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false
          }
    });
    
    const mailOptions = {
        from: "ecommerce",
        to: ADMIN_EMAIL,
        subject: "Prueva de envio de correo electronico",
     
        html: "<h1>hola usuario</h1>"
    }
    
    async function sendMailFromNodeMailer() {
        try {
            const info = await transporter.sendMail(mailOptions);
            console.log(info);
        } catch (err) {
            console.log(err);
        }
    }
    
    sendMailFromNodeMailer()
    .then(() => process.exit(0))
    .catch(err => console.log(err))
} 
