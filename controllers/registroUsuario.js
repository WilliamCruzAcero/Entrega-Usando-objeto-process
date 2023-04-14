require('dotenv').config()
const { request, response } = require('express');
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer');
const { StatusCodes } = require('http-status-codes');
const { User } = require('../models/modelUsuario');
const envioWhatsapp = require('../whatsapp/msgWhatsapp');

const ADMIN_EMAIL = process.env.ADMIN_EMAIL
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;


const registroUsuario = async (req = request, res = response) => {
    
    const { name, lastname, age, phone, email, password, address, city, country } = req.body;

    if (!name) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'El nombre es requerido'
        });
    }

    if (!lastname) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'El apellido en requerido'
        })
    }

    if (!age) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'La edad es requerida'
        })
    }

    if (!phone) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'El número de teléfono es requerido'
        })
    }
    var isPhoneRedExp = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;
    if (!isPhoneRedExp.test(phone)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'El numero de teléfono no es valido'
        })

    }

    if (!email) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: `El email es requerido`
        });
    }

    var isEmailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!isEmailRegExp.test(email)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'El email debe ser un correo electrónico'
        });
    }

    if (!password) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'La contraseña es requerida'
        });
    }

    if (!address) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'La dirección es requerida'
        })
    }
    if (!city) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'La ciudad es requerida'
        })
    }
    if (!country) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'El pais requerido'
        })
    }

    const usuarioExistente = await User.findOne({ email });

    if (usuarioExistente?.email) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'El email ya esta en uso'
        });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    const { avatar } = req.body
    const nuevoUsuario = new User({
        avatar,
        name,
        lastname,
        age,
        phone,
        email,
        password: hashedPassword,
        address,
        city,
        country,
        productos: []
    })

    await nuevoUsuario.save();

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
        subject: "Nuevo usuario registrado",

        html: `usuario: 
                    Nombre: ${name} ${lastname}, 
                    Edad: ${age},
                    Telefono: ${phone},
                    Correo: ${email},
                    Dirección: ${address},
                    Ciudad: ${city},
                    Pais: ${country}`
    }

    async function sendMailFromNodeMailer() {
        try {
            const info = await transporter.sendMail(mailOptions);
            // console.log(info);
        } catch (err) {
            console.log(err);
        }
    }

    sendMailFromNodeMailer()
    envioWhatsapp()

    res.json({
        message: `Usuario ${email} registrado con exito`
    })
};

module.exports = {
    registroUsuario
}