import dotenv from 'dotenv';
dotenv.config();
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import { StatusCodes } from 'http-status-codes';
import { usuarioModel } from '../models/modelUsuario';
import envioWhatsapp from '../services/whatsapp/msgWhatsapp';
const { logger } = require('../models/loggerWinston');
const WebError = require('../models/webError');

// const { sendMailFromNodeMailer } = require('../services/msgGmail/index_gmail');

const ADMIN_EMAIL = process.env.ADMIN_EMAIL
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

export const registroUsuario = async (req: Request, res: Response) => {
    
    const { type, name, lastname, age, phone, email, password, address, city, country } = req.body;
    
    try {
        if (!type) {
            throw new WebError('Seleccione un tipo de usuario', StatusCodes.BAD_REQUEST);
        }
        if (!name) {
            throw new WebError('El nombre de usuario es requerido', StatusCodes.BAD_REQUEST);            
        }
    
        if (!lastname) {
            throw new WebError('El apellido del usuario es requerido', StatusCodes.BAD_REQUEST);
        }
    
        if (!age) {
            throw new WebError('La edad del usuario es requerida', StatusCodes.BAD_REQUEST);
        }
        
        if (!phone) {
            throw new WebError('El número de teléfono es requerido', StatusCodes.BAD_REQUEST); 
        }

        var isPhoneRedExp = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;

        if ( !isPhoneRedExp.test(phone)) {
            throw new WebError('El numero de teléfono no es valido', StatusCodes.BAD_REQUEST);
        }
    
        if ( !email) {
            throw new WebError(`El email es requerido`, StatusCodes.BAD_REQUEST);
        }
    
        var isEmailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!isEmailRegExp.test(email)) {
            throw new WebError('El email debe ser un correo electrónico', StatusCodes.BAD_REQUEST);
        }
    
        if (!password) {
            throw new WebError('La contraseña es requerida', StatusCodes.BAD_REQUEST);
        }
    
        if (!address) {
            throw new WebError('La dirección es requerida', StatusCodes.BAD_REQUEST);
        }
       
        if (!city) {
            throw new WebError('La ciudad es requerida', StatusCodes.BAD_REQUEST);
        }
       
        if (!country) {
            throw new WebError('El pais requerido', StatusCodes.BAD_REQUEST);
        }
    
        const usuarioExistente = await usuarioModel.findOne({ email });
    
        if ( usuarioExistente?.email) {
            throw new WebError('El email ya esta en uso', StatusCodes.BAD_REQUEST);
        }
    
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const { avatar } = req.body
        const nuevoUsuario = new usuarioModel({
            type,
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
                        Tipo de usuario: ${type}, 
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
            message: `Usuario ${name} ${lastname} con ${email}, registrado con exito`
        })
    } catch (error) {
        const status = error.status || StatusCodes.INTERNAL_SERVER_ERROR;
        logger.log('error', error.message)
        return res.status(status).json({
            error: error.message
        }) 
    }
    
};