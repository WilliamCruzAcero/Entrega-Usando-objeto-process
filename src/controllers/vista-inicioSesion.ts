import { Request, Response} from 'express';

export const vistaInicio = (req: Request , res: Response) => {
    res.render('formulario-inicio-sesion');
};