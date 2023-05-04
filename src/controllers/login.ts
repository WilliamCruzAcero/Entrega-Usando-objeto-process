import { Request, Response} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { Token } from "../models/token";
import {WebError} from '../models/webError';
import {StatusCodes} from 'http-status-codes'
import { usuarioModel } from '../models/modelUsuario';
import { logger } from '../models/loggerWinston';
import { SECRET } from '../../config';


const secret = SECRET;

export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body;
    let user

    try {
        if (!email) {
            throw new WebError('El email de usuario es requerido', StatusCodes.BAD_REQUEST)
        }

        if (!password) {
            throw new WebError('La contraseña es requerida', StatusCodes.BAD_REQUEST)
        }

        user = await usuarioModel.findOne({ email });

        if (!user?.email) {
            throw new WebError('El usuario no esta registrado', StatusCodes.UNAUTHORIZED);
        }

        const hashedPassword = user.password;
        const isCorrectPassword = await bcrypt.compare(password, hashedPassword)

        if (!isCorrectPassword) {
            throw new WebError('El nombre de usuario o contraseña es incorrecta',  StatusCodes.UNAUTHORIZED);
        }

    } catch (error: any) {
        const status = error.status || StatusCodes.INTERNAL_SERVER_ERROR;
        logger.log('error', error.message)
        return res.status(status).json({
            error: error.message
        })           
    }

    const tokenBody: Token = {
        email: user.email,
        name: user.name,
        lastname: user
    }

    const token = jwt.sign(tokenBody, secret, { expiresIn: '1h' });
    
    res.json({ token });
}