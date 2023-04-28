import {Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import { Token } from '../models/token';


const secret = process.env.SECRET;

export function verifyToken(req: Request & {token: Token}, res: Response, next) {
    const token = req.headers.authorization ?? req.query.token;

    if (!token) {
        res.status(StatusCodes.UNAUTHORIZED).send('No se proporcionó un token de autenticación');
        return;
    }

    try {
        const decoded = jwt.verify(token, secret);
        req.token = decoded;
        next();
    } catch (error) {
        res.status(StatusCodes.UNAUTHORIZED).send('Token de autenticación no válido');
    }
}

export function verifyTokenWithRedirect(req: Request & {token: Token}, res: Response, next) {
    const token = req.headers.authorization ?? req.query.token;

    if (!token) {
        res.redirect('/sesion')
        return;
    }

    try {
        const decoded = jwt.verify(token, secret);
        req.token = decoded;
        next();
    } catch (error) {
        res.redirect(StatusCodes.UNAUTHORIZED, '/sesion')
    }
}