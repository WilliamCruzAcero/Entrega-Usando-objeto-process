import {Request, Response} from 'express';

export const vistaRegistro = (req: Request, res: Response) => {
    res.render('formulario-registrar-usuario');
};