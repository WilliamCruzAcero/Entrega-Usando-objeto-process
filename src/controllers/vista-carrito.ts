import {Request, Response} from 'express';

export const vistaCarrito = (req: Request, res: Response) => {
    res.render('carrito');
};