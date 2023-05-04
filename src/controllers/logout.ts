import { Request, Response } from "express";
import { Token } from "../models/token";

export const logout = (req: Request & {token: Token;}, res: Response) => {
    
    const { name } = req.token
    res.render('mensaje', { mensaje: `Hasta luego ${name}` })

}