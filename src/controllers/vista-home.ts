import { Request, Response } from 'express';

export const vistaHome = (req: Request, res: Response) => {
    res.render('home');
}